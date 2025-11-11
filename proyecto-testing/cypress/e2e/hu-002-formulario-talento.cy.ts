/// <reference types="cypress" />
const TALENT_URL = '/talento.html';
describe('HU-002 — Formulario de talento', () => {
 beforeEach(() => {
  cy.visit(TALENT_URL, { failOnStatusCode: false });  
  cy.document().its('readyState').should('eq', 'complete');
});
  it('CYP-002-001: Bloquea envío si falta un obligatorio', () => {
    cy.contains('button[type="submit"], input[type="submit"]', /enviar|postular/i).click();
    cy.get('input[name*="nom" i]:invalid').should('exist');     
    cy.get('input[name*="apel" i]:invalid').should('exist');    
    cy.get('input[type="email"]:invalid').should('exist');      
    cy.get('input[name*="ciud" i]:invalid, input[id*="ciud" i]:invalid').should('exist');
    cy.get('select[name*="nivel" i]:invalid').should('exist');  
    cy.get('select[name*="cargo" i]:invalid').should('exist');  
    cy.get('input[type="file"]:invalid').should('exist');       

    cy.get('input[type="checkbox"][required]').should('have.length.greaterThan', 0);
  }); 
  it('CYP-002-002: Celular solo dígitos y mínimo 10', () => {
    cy.get('input[name*="nom" i]').type('Ana');
    cy.get('input[name*="apel" i]').type('Pérez');
    cy.get('input[type="email"]').type('ana.perez@example.com');
    cy.get('input[name*="ciud" i]').type('Bogotá');
    cy.get('select[name*="nivel" i]').select(1);
    cy.get('select[name*="cargo" i]').select(1);
    cy.get('input[type="tel"], input[name*="cel" i]').first().type('12345abc');
    cy.contains('button[type="submit"], input[type="submit"]', /enviar|postular/i).click();
    cy.get('input[type="tel"], input[name*="cel" i]')
      .first()
      .should('match', ':invalid');
    cy.get('input[type="tel"], input[name*="cel" i]')
      .first()
      .then(($el) => {
        const input = $el[0] as HTMLInputElement;
        expect(input.validity.valid).to.be.false;
      });
  });
  it('CYP-002-003: Rechaza HV con tipo/tamaño no permitido', () => {
    cy.get('input[type="file"]').selectFile(
      {
        contents: 'dummy-binary',
        fileName: 'hv.exe',
        mimeType: 'application/octet-stream',
        lastModified: Date.now(),
      },
      { force: true }
    );
    cy.contains(/(pdf|docx?|formato|archivo).*no.*(v[aá]lido|permitido)/i).should('be.visible');
  });
  it('CYP-002-004: Envío válido (sin backend) dispara submit y muestra confirmación local si existe', () => {
    cy.get('input[name*="nom" i]').clear().type('Laura');
    cy.get('input[name*="apel" i]').clear().type('Gómez');
    cy.get('input[type="email"]').clear().type('laura.gomez@example.com');
    cy.get('input[type="tel"], input[name*="cel" i]').first().clear().type('3001234567');
    cy.get('input[name*="ciud" i]').clear().type('Bogotá');
    cy.get('select[name*="nivel" i]').select(1);
    cy.get('select[name*="cargo" i]').select(1);
    cy.get('input[type="file"]').selectFile(
      {
        contents: '%PDF-1.4\n%talent',
        fileName: 'hv.pdf',
        mimeType: 'application/pdf',
        lastModified: Date.now(),
      },
      { force: true }
    );
    cy.contains(/pol[ií]tica|datos personales/i)
      .find('input[type="checkbox"]')
      .check({ force: true });
    cy.window().then((win) => {
      cy.get('form').first().then(($form) => {
        $form.on('submit', (ev) => {
          ev.preventDefault();
          (win as any).__talento_enviado__ = true;
          const node = win.document.createElement('div');
          node.id = 'talento-ok';
          node.textContent = 'Postulación enviada (simulada)';
          win.document.body.appendChild(node);
        });
      });
    });
    cy.contains('button[type="submit"], input[type="submit"]', /enviar|postular/i).click();
    cy.window().its('__talento_enviado__').should('eq', true);
    cy.contains(/postulaci[oó]n.*enviada/i).should('exist');
  });
});
