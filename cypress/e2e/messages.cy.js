describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/shui-test-driven-development-cypress');
  });

  it('display all messages that are stored in local storage', () => {
    cy.wait(2000);

    cy.get('.messages').should('be.visible');
    cy.get('.messages').children().should('have.length.greaterThan', 1);
  });

  it('display the message info', () => {
    cy.wait(2000);

    cy.get('.author').first().should('have.text', 'John');
    cy.get('.content').first().should('have.text', 'Hello world');
  });
});
