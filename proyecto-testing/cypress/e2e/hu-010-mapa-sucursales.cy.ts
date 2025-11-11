/// <reference types="cypress" />
describe('HU-010 – Mapa y sucursales', () => {
  beforeEach(() => {
    cy.visit('/contact.html');
    cy.document().its('readyState').should('eq', 'complete');
  });

  it('CYP-010-001: Mapa embebido visible', () => {
    cy.get('iframe[src*="google.com/maps"], iframe[src*="maps.google"]')
      .should('be.visible');
  });

  it('CYP-010-002: Información de sucursal (Dirección, Teléfono, Horario) visible', () => {
    cy.contains(/Direcci[oó]n/i).should('be.visible');
    cy.contains(/Tel[eé]fono/i).should('be.visible');
    cy.contains(/Horario/i).should('be.visible');
  });
  it('CYP-010-003: "Abrir en Google Maps" apunta a Maps y responde', () => {
    cy.contains('a', /Abrir en Google Maps/i)
      .should('be.visible')
      .invoke('prop', 'href') // URL absoluta
      .then((href: string) => {
        expect(href).to.match(/(google\.[a-z.]+\/maps|goo\.gl\/maps)/i);
        cy.request({
          url: href,
          method: 'HEAD',           // si el HEAD falla, cambiar a 'GET'
          followRedirect: true,
          failOnStatusCode: false,
        })
          .its('status')
          .should((s) => expect([200, 204, 301, 302, 303, 307, 308]).to.include(s));
      });
  });
  it('CYP-010-004: Fallback si no hay iframe de mapa', () => {
    cy.get('iframe[src*="google.com/maps"], iframe[src*="maps.google"]').then(($ifr) => {
      if ($ifr.length === 0) {
        cy.contains(/Direcci[oó]n/i).should('be.visible');
        cy.contains('a', /Google Maps/i)
          .should('have.attr', 'href')
          .and('match', /(google\.[a-z.]+\/maps|goo\.gl\/maps)/i);
      } else {
        cy.log('Mapa presente — fallback N/A');
      }
    });
  });
});
