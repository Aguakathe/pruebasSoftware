/// <reference types="cypress" />

describe('HU-006 – Conoce más desde Home', () => {
  it('CYP-006-001: Conoce más abre Servicios (o detalle) en la misma pestaña', () => {
    cy.visit('/');

    cy.get('a[href*="service"], a[href*="servicio"]')
      .filter(':visible')
      .first()
      .click({ force: true });

    cy.location('pathname').should('match', /service|servicio/i);
  });
});
