/// <reference types="cypress" />
describe('HU-007 – LinkedIn', () => {
  it('el enlace apunta a linkedin y la URL responde', () => {
    cy.visit('/');
    cy.get('header a[href*="linkedin"], footer a[href*="linkedin"]')
      .filter(':visible')
      .first()
      .should('be.visible')
      .invoke('prop', 'href')                   
      .then((href: string) => {
        expect(href).to.match(/linkedin\.com/i);
        cy.request({
          url: href,
          method: 'HEAD',
          followRedirect: true,
          failOnStatusCode: false
        })
          .its('status')
          .should((s) => expect([200, 204, 301, 302, 303, 307, 308]).to.include(s));
      });
  });
});
