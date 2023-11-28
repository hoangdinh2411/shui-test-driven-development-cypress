describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('.btn--new').first().click();
    cy.get('#post-form').should('be.visible');
  });

  it('display the post form', () => {
    cy.get('form').within(() => {
      cy.get('#content').should('be.visible');
      cy.get('#author').should('be.visible');
      cy.get('.btn--public').should('be.visible');
    });
  });

  it('Press the submit button if the content and the author name fields have value', () => {
    cy.get('input#content').type('Hello World');
    cy.get('input#author').type('John Doe');
    cy.get('.btn--public').first().click();
    cy.get('.messages').should('be.visible');
  });
});
