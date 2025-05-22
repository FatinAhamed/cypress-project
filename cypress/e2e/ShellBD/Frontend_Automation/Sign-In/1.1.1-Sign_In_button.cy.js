describe("Login", () => {

    beforeEach(() => {
        cy.visit("/");

    });

    it("TC_01-The login page will appear", () => {
        
    });


    it("TC_02-should login with valid phone number and password", () => {
        
        
        cy.contains('button', 'Sign In').click();
  
        cy.get('input[name="phone"]').type('01851100944');
        cy.get('input[name="password"]').type('123456');
        cy.get('button[type="submit"]').click();
        cy.contains("You’re logged in!").should('be.visible');

    });
  
    it("TC_20-Should open Google account page when clicking on Google icon", () => {
      
      cy.contains('button', 'Sign In').click();
      
      cy.contains('div', 'Google').click();
    
    });
    
    it("TC_21-Should open Facebook page when clicking on Facebook icon", () => {
      
      cy.contains('button', 'Sign In').click();
      
      cy.contains('div', 'Facebook').click();
      
    });

    it("TC_22-Should open the Registration page when click Sign up now button", () => {
      
      cy.contains('button', 'Sign In').click();
  
      cy.contains('a', 'Sign up now').click();
      cy.location('pathname').should('include', '/register');
      
    });

});

describe("Negative Test case", () => {

    beforeEach(() => {
        cy.visit("/");

    });

    it("TC_03-should disable 'Sign In' button if phone number and password field are empty", () => {
        
        cy.contains('button', 'Sign In').click();
    
          
        cy.get('input[name="phone"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('button[type="submit"]').should('be.disabled');

    });

    it("TC_04-should disable 'Sign In' button if phone number field is empty", () => {
       
        cy.contains('button', 'Sign In').click();

        cy.get('input[name="phone"]').clear();
        cy.get('input[name="password"]').type('123456');
        cy.get('button[type="submit"]').should('be.disabled');
    
    });

    it("TC_05-Should disable 'Sign In' button if password field is empty", () => {
        
        
        cy.contains('button', 'Sign In').click();
        
        cy.get('input[name="password"]').clear();
        cy.get('input[name="phone"]').type('01851100944');
        cy.get('button[type="submit"]').should('be.disabled');
    });

    it("TC_06-Should disable 'Sign In' button and show warning if phone number is less than 11 digit", () => {
        
        
        cy.contains('button', 'Sign In').click();
        cy.get('input[name="phone"]').clear().type('0185110094');
        cy.get('input[name="password"]').type('123456');
        cy.get('button[type="submit"]').should('be.disabled');
        cy.contains('Please enter a valid phone number').should('be.visible');    
    });

    it("TC_07-Should disable 'Sign In' button and show warning if phone number is greater than 11 digit", () => {
        
        
        cy.contains('button', 'Sign In').click();
    
        cy.get('input[name="phone"]').clear().type('018511009445');
        cy.get('input[name="password"]').type('123456');
        cy.get('button[type="submit"]').should('be.disabled');
        cy.contains('Phone number cannot exceed 11 digits').should('be.visible');
    
    });

    it("TC_08-Show warning If an incorrect Phone Number is entered", () => {
        
        cy.contains('button', 'Sign In').click();
    
        cy.get('input[name="phone"]').clear().type('01851100943');
        cy.get('input[name="password"]').type('123456');
        cy.get('button[type="submit"]').click();
        
        cy.get('div[data-title=""]')
            .should('be.visible')
            .and('contain.text', "Your credentials didn't match");
        
    });

    it("TC_09-Should disable 'Sign In' button and warning message displayed if password is less than 6 digit", () => {
        
        cy.contains('button', 'Sign In').click();
    
        cy.get('input[name="password"]').clear();
        cy.get('input[name="phone"]').type('01851100944');
        cy.get('input[name="password"]').type('12345');
        cy.contains('Password should be 6 characters or more').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    
    });

    it("TC_10-Should unhide the password when the eye button is clicked", () => {
        
        cy.contains('button', 'Sign In').click();
    
        cy.get('input[name="password"]').type('123456');
        cy.get('img[src="/icons/eye.svg"]').click();
        cy.get('input[name="password"]').should('have.attr', 'type', 'text');
     
    });

    it("TC_11-Show warning If an incorrect Password is entered", () => {
        
        cy.contains('button', 'Sign In').click();
    
        cy.get('input[name="phone"]').clear().type('01851100944');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        
        cy.get('div[data-title=""]')
          .should('be.visible')
          .and('contain.text', "Your credentials didn't match"); 
    
    
        });

     });

