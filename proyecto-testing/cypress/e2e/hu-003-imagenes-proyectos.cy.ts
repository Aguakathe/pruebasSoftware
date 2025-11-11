/// <reference types="cypress" />

describe('HU-003 – Imágenes de proyectos (básico)', () => {
  beforeEach(() => {
    cy.visit('/preliminar/mockup/index.html', { failOnStatusCode: false });
  });

  it('abre una imagen y se muestra el modal/lightbox; luego se cierra con ESC', () => {
   
    cy.contains('nav a, nav button', /Proyectos/i).click({ force: true });

    
    cy.get('#proyectos, #projects, .projects, .project-grid', { timeout: 10000 }).should('exist');

   
    cy.get('#proyectos img, #projects img, .projects img, .project-card img')
      .first()
      .click({ force: true });

    
    cy.get('[role="dialog"], .modal.show, .lightbox:visible, .fancybox__container:visible, .glightbox-container:visible')
      .should('be.visible');

    
    cy.get('body').type('{esc}');
    cy.get('[role="dialog"], .modal.show, .lightbox:visible, .fancybox__container:visible, .glightbox-container:visible')
      .should('not.exist');
  });
});
