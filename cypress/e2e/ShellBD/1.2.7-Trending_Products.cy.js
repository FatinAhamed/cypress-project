describe("Trendin Products", () => {

  beforeEach(() => {
        cy.visit("/");

    it("TC_62-Should display Trending Products", () => {
        
    
        cy.contains("h1", "Trending Products")
          .scrollIntoView()
          .should('be.visible');

    });

    it("TC_70-Clicks the next and prev button in the trending products list", () => {
        
        
    
        
        cy.get('img[alt="Next"]')
          .should('be.visible')
          .first()
          .click();
    
        cy.get('img[alt="Previous"]')
          .should('be.visible')
          .first()
          .click();


    });
  
    it('TC_69-Should navigate to product details when clicking on a trending product', () => {
         
        
    
        cy.get('.slick-slide.slick-active[data-index="0"] a[href^="/product/"]')
          .click();
  
        cy.get('.product_detail_image img')
          .trigger('mouseover')
          .should('have.css', 'transform')
          .and('not.equal', 'scale(1)');

    });

    it('TC_71-Product should be added to the cart when Click on Add to Cart', () => {
      
        
   
        cy.get('.slick-slide.slick-active[data-index="0"] a[href^="/product/"]')
          .click();
   
        cy.get('button[type="button"]')
          .contains('Add to Cart')
          .click();
        
    });

    it('TC_72-Should not add the same product more than once', () => {
          
      
       
        cy.get('.slick-slide.slick-active[data-index="0"] a[href^="/product/"]')
          .click();
             
        cy.get('button[type="button"]')
          .contains('Add to Cart')
          .click();
             
        cy.wait(1000);
        
        cy.get('button[type="button"]')
          .contains('Add to Cart')
          .click();

        cy.wait(4000); 
        
        cy.contains('Product already added!')
          .should('be.visible');

        
    });

          
  });


});