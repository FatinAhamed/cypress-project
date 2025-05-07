describe("sample test", () => {
    it("login", () => {
      cy.visit("https://estore.rkpl.com.bd/")
      cy.contains('button', 'Sign In').click();
   
    })
  })
  