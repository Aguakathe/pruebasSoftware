/// <reference types="cypress" />
describe('HU-005 Filtro y navegación de servicios', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.document().its('readyState').should('eq', 'complete');
  });
  it('CYP-005-001: Navega a Servicios y focaliza “Consultoría en Ingeniería”', () => {
    // 1) Página de Servicios
    cy.contains('nav a,nav button', /^Servicios$/i)
      .should('be.visible')
      .click({ force: true });
    cy.location('pathname').should('match', /service/i);
    cy.contains('h1,h2', /^Servicios$/i).should('be.visible');
    // 2) Selección de la categoría
    cy.contains('a, .card, .service-item, .portfolio-item', /Consultor[ií]a en Ingenier[ií]a/i)
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });
    // 3) Enfoque/encabezado visible
    cy.contains('h1,h2,h3', /Consultor[ií]a en Ingenier[ií]a/i)
      .should('be.visible');
    cy.screenshot('CYP-005-001-final');
  });
});
