describe("Forgot Password", () => {

    beforeEach(() => {
        cy.visit("/");


    it("TC_12-Should open the Forgot Password page with phone number field", () => {
        
        cy.contains('button', 'Sign In').click();
    
        cy.get('a[href="/forgot-password"]').click();
        cy.url().should('include', '/forgot-password');
        cy.get('input[name="phone"]').should('be.visible');
    
    });

    it("TC_13-Should open the OTP verification page and show 'OTP successfully sent' message", () => {
        
        
        cy.contains('button', 'Sign In').click();
        
        cy.get('a[href="/forgot-password"]').click();
        cy.get('input[name="phone"]').type('01851100944');
        
        cy.contains('div', 'Continue').click();
        cy.get('div[data-title=""]')
          .should('be.visible')
          .and('contain.text', "OTP successfully sent");
        
        cy.url().should('include', '/otp-verification');


      
    });
    
  });

});