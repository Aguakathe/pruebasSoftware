/// <reference types="cypress" />
describe('HU-008 – Accesos rápidos de contacto', () => {
  beforeEach(() => cy.visit('/'));
  // Teléfono: debe invocar esquema tel:
  it('CYP-008-001: Teléfono usa tel:', () => {
    cy.get('a[href^="tel:"]').filter(':visible').first()
      .invoke('attr', 'href')                        
      .then((href: string | undefined) => {
        const url = String(href);
        expect(url).to.match(/^tel:\+?\d[\d\s-]{7,}$/);
      });
  });// Correo
  it('CYP-008-002: Correo usa mailto:', () => {
    cy.get('a[href^="mailto:"]').filter(':visible').first()
      .invoke('attr', 'href')
      .then((href: string | undefined) => {
        const url = String(href);
        expect(url).to.match(/^mailto:[^@]+@[^@]+\.[a-z]{2,}$/i);
      });
  }); // WhatsApp
  it('CYP-008-003: WhatsApp abre dominio oficial y responde', () => {
    cy.get('a[href*="wa.me"], a[href*="api.whatsapp.com"]')
      .filter(':visible')
      .first()
      .invoke('prop', 'href')                         
      .then((href: string) => {
        expect(href).to.match(/(wa\.me|api\.whatsapp\.com)/i);
        cy.request({
          url: href,
          method: 'HEAD',                            
          followRedirect: true,
          failOnStatusCode: false,
        })
          .its('status')
          .should((s) => expect([200,204,301,302,303,307,308]).to.include(s));
      });
  });
});
