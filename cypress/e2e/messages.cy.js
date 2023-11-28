describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.wait(2000);
  });

  it('display all messages that are stored in local storage', () => {
    cy.get('.messages').should('be.visible');
    cy.get('.messages').children().should('have.length.greaterThan', 1);
  });

  it('display the message info', () => {
    cy.get('.author').first().should('have.text', 'John');
    cy.get('.content').first().should('have.text', 'Hello world');
  });
});