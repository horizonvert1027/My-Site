describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('Phantom Lancer Portfolio');
  });
});
