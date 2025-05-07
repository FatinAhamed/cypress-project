describe("test1", () => {
    it("inpute Phone Number and Password", () => {
      cy.visit("https://estore.rkpl.com.bd/")
      cy.contains('button', 'Sign In').click();

      cy.get('input[name="phone"]').type('01851100945');
      cy.get('input[name="password"]').type('gopalpur');
      cy.get('button[type="submit"]').click();
      cy.contains("You’re logged in!").should('be.visible');
      
   
    })
  })