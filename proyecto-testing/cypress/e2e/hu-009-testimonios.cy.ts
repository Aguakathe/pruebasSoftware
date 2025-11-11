/// <reference types="cypress" />
const assertNearTop = (text: RegExp) => {
  cy.contains('h1,h2,h3,section,[id]', text, { matchCase: false })
    .should('be.visible')
    .then(($el) => {
      const r = $el[0].getBoundingClientRect();
      expect(r.top).to.be.within(-10, 250); 
    });
};
describe('HU-009 – Menú de navegación', () => {
  beforeEach(() => cy.visit('/'));
  it('clic en "Servicios" desplaza a su sección en la misma página', () => {
    cy.contains('nav a, nav button', /^Servicios$/i).click({ force: true });
    
    cy.location('hash').then((hash) => {
      if (hash && /serv/i.test(hash)) {
        expect(hash).to.match(/serv/i);
      } else {
        assertNearTop(/servicios/i);
      }
    });
  });
  it('clic en "Sobre Ginprosa" desplaza a su sección en la misma página', () => {
    cy.contains('nav a, nav button', /Sobre\s+Ginprosa/i).click({ force: true });
    cy.location('hash').then((hash) => {
      if (hash && /(sobre|about)/i.test(hash)) {
        expect(hash).to.match(/(sobre|about)/i);
      } else {
        assertNearTop(/sobre\s+ginprosa|qu[ií]enes\s+somos/i);
      }
    });
  });
});

