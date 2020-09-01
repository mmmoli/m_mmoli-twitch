describe('web', () => {
  describe('Styles', () => {
    beforeEach(() => cy.visit('/'));

    it('should use custom fonts', () => {
      cy.get('body').should('have.css', 'font-family', 'rgb(217,217,217)');
    });
  });

  describe('Home', () => {
    beforeEach(() => cy.visit('/'));

    it('should display a heading', () => {
      cy.findAllByText(/hi/i).should('exist');
    });

    it('should do someting else', () => {
      cy.findAllByText(/hi/i).should('exist');
    });
  });
});
