/// <reference types="cypress" />

describe('HU-004 – Filtro de proyectos por categoría (mínimo)', () => {
  const GRID  = '#proyectos, #projects, .projects';
  const CARD  = `${GRID} .project-card, ${GRID} .card`;
  const BTN   = 'button, a, [data-category]';   // botones/enlaces de filtro

  beforeEach(() => {
    cy.visit('/preliminar/mockup/index.html', { failOnStatusCode: false });
    cy.contains('nav a, nav button', /Proyectos/i).click({ force: true });
    cy.get(GRID, { timeout: 10000 }).should('be.visible');
  });

  it('CYP-004-001: filtra por Industrial y muestra solo esa categoría', () => {
    cy.contains(BTN, /Industrial/i).first().click({ force: true });

    cy.get(CARD).filter(':visible').should('have.length.greaterThan', 0)
      .each(($el) => {
        const t = ($el.text() || '') + ' ' + ($el.attr('data-category') || '');
        expect(/Industrial/i.test(t)).to.eq(true);
      });
  });

  it('CYP-004-002: si no hay resultados, muestra mensaje', () => {
    cy.contains(BTN, /Institucional/i).first().click({ force: true });

    cy.get(CARD).filter(':visible').then(($cards) => {
      if ($cards.length === 0) {
        cy.contains(/No se encontraron proyectos para esta categoría/i).should('be.visible');
      }
    });
  });

  it('CYP-004-003: limpiar filtro reaparece todo', () => {
    cy.contains(BTN, /Industrial/i).first().click({ force: true });
    cy.contains(BTN, /Todos|All|Limpiar/i).first().click({ force: true });

    cy.get(CARD).filter(':visible').its('length').should('be.greaterThan', 0);
  });
});
