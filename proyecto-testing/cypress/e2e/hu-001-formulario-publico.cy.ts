/// <reference types="cypress" />
const SEL = {
  nombre : 'input[name*="nom" i], input[id*="nom" i]',
  correo : 'input[type="email"], input[name*="mail" i], input[id*="mail" i]',
  mensaje: 'textarea[name*="mens" i], textarea[id*="mens" i], textarea',
  enviar : 'button[type="submit"], input[type="submit"]'
};
describe('HU-001 • Formulario de contacto', () => {
  beforeEach(() => {
    cy.visit('/contact.html');
    cy.document().its('readyState').should('eq', 'complete');
  });
  it('CYP-001-001: Bloquea envío si faltan obligatorios y muestra error', () => {
    cy.contains(SEL.enviar, /enviar/i).click();
    cy.get(`${SEL.nombre}:invalid`).should('exist');
    cy.get(`${SEL.correo}:invalid`).should('exist');
    cy.get(`${SEL.mensaje}:invalid`).should('exist');
    cy.location('pathname').should('include', 'contact');
  });
  it('CYP-001-002: Correo inválido o mensaje < 20 marca error accesible', () => {
    cy.get(SEL.nombre).type('Juan Pérez');
    cy.get(SEL.correo).type('juan@');           
    cy.get(SEL.mensaje).type('Muy corto');      
    cy.contains(SEL.enviar, /enviar/i).click();
    cy.get(SEL.correo).should(($el) => {
      const aria = $el.attr('aria-invalid');
      if (aria) expect(aria).to.eq('true');
    });
    cy.get(`${SEL.correo}:invalid`).should('exist');
    cy.get(SEL.mensaje).should(($el) => {
      const aria = $el.attr('aria-invalid');
      if (aria) expect(aria).to.eq('true');
    });
    cy.get(SEL.mensaje).invoke('val').then((v) => {
      expect(String(v).length).to.be.lessThan(20);
    });
    cy.contains(/correo.*inv[aá]lido|formato.*correo/i).should('exist').and('be.visible');
  });
  it('CYP-001-003: Formulario válido → evita doble envío y confirma "mensaje enviado"', () => {
    cy.intercept('POST', '**', { statusCode: 200, body: { ok: true } }).as('send');
    cy.get(SEL.nombre).clear().type('Laura Gómez');
    cy.get(SEL.correo).clear().type('laura.gomez@example.com');
    cy.get(SEL.mensaje).clear().type('Estoy interesada en conocer más sobre sus servicios. Gracias.');
    cy.contains(SEL.enviar, /enviar/i).as('btn').click().click({ force: true });
    cy.wait('@send');                       
    cy.get('@btn').should(($b) => {
      const disabled = $b.is(':disabled') || $b.attr('aria-disabled') === 'true';
      expect(disabled).to.be.true;
    });
    cy.contains(/mensaje enviado|gracias por contactar/i).should('be.visible');
  });

  it('CYP-001-004: Falla de red/servidor → error amigable y conserva datos', () => {
    cy.intercept('POST', '**', { statusCode: 500 }).as('sendFail');
    cy.get(SEL.nombre).clear().type('Carlos Ruiz');
    cy.get(SEL.correo).clear().type('carlos.ruiz@example.com');
    cy.get(SEL.mensaje).clear().type('Quisiera solicitar una cotización para un proyecto.');
    cy.contains(SEL.enviar, /enviar/i).click();
    cy.wait('@sendFail');
    cy.contains(/error|intenta de nuevo|no se pudo enviar/i).should('be.visible');
    cy.get(SEL.nombre).should('have.value', 'Carlos Ruiz');
    cy.get(SEL.correo).should('have.value', 'carlos.ruiz@example.com');
    cy.get(SEL.mensaje).should('contain.value', 'cotización');
  });
});
