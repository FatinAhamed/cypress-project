describe("1.3.1 All Products", () => {

    beforeEach(() => {
        
        cy.visit("/");

        cy.get('a[href="/shop"]').first().click();

   
    });

    it("TC_85-Should display searched product", () => {

    
        const productName = "Shell Advance 4T AX5 Scooter 10W30_12x0.8L";

        cy.get('input[placeholder="Search"]').first().click({ force: true });

        cy.get('input[placeholder="Search"]').first().type(productName, { force: true });
        
        
        cy.contains("h2", productName).should("be.visible");
    
    });
    
  });



describe("Dropdown Test", () => {

        beforeEach(() => {

        cy.visit("/");

        cy.get('a[href="/shop"]').first().click();


    


    it("TC_86-Should display only the selected type", () => {

        cy.get('button[aria-haspopup="listbox"]')
            .contains("Type")
            .click();

  
        cy.get('ul[role="listbox"] li')
          .contains("Full Synthetic")
          .click();

        cy.get('button[aria-haspopup="listbox"]')
          .contains("Full Synthetic")
          .should("be.visible");

    });

    it("TC_87-Should display only the selected Brand", () => {
    
        cy.get('button[aria-haspopup="listbox"]')
          .contains("Brand")
          .click();
      
        const brandToSelect = "Advance Mineral";
         cy.get('span[data-label="true"]').contains(brandToSelect).click();

              
        cy.get('span[data-slot="value"]')
          .should("contain.text", brandToSelect);


    });


    it("TC_88-Should display only the selected size", () => {
        
        cy.get('button[aria-haspopup="listbox"]')
          .contains("Size")
          .click();
          
        const sizeToSelect = "1 Liter";
         cy.get('span[data-label="true"]').contains(sizeToSelect).click();
    
                  
        cy.get('span[data-slot="value"]')
            .should("contain.text", sizeToSelect);
    
    });


    it("TC_89-Should display only the selected Category", () => {
            
        cy.get('button[aria-haspopup="listbox"]')
            .contains("Category")
              .click();
              
        const categoryToSelect = "Motorcycle";
         cy.get('span[data-label="true"]').contains(categoryToSelect).click();
        
                      
        cy.get('span[data-slot="value"]')
            .should("contain.text", categoryToSelect);
                
    });


    it("TC_90-Should display only the selected Sort by Price", () => {
                
        cy.get('button[aria-haspopup="listbox"]')
            .contains("Sort by Price")
                .click();
                  
        const sortbyPriceToSelect = "Low to High";

        cy.get('span[data-label="true"]').contains(sortbyPriceToSelect).click();
            
                          
        cy.get('span[data-slot="value"]')

            .should("contain.text", sortbyPriceToSelect);

                    
    });


    it("TC_91-Should revert to the default saved state for all popup menue", () => {
                    
        cy.get('button')
          .contains("Reset All")
            .click();

        cy.get('button[aria-haspopup="listbox"]')
            .contains("Type");
            

            
        cy.get('button[aria-haspopup="listbox"]')
            .contains("Brand");
            

            
        cy.get('button[aria-haspopup="listbox"]')
            .contains("Size");
            
 
            
        cy.get('button[aria-haspopup="listbox"]')
            .contains("Category");
            

            
        cy.get('button[aria-haspopup="listbox"]')
            .contains("Sort by Price");
            
    
               
    });

    beforeEach(() => {
        cy.visit("/");

        cy.get('a[href="/shop"]').first().click();

        cy.wait(2000);

        
    });

    it("TC_92-Should display products on the shop page", () => {

    
        cy.get('.min-h-[65vh]').scrollIntoView();
    
    
    });

    it("TC_93-should navigate to the next page when 'Next' is clicked", () => {

        cy.visit('/shop');
      
        cy.get('.flex.gap-2.md\\:gap-3.items-center.px-3.py-2.text-accent')
            .contains('Next')
            .click()({force: true});
    
        

    });

    it("TC_93-Should navigate to the previous page when 'Prev' is clicked", () => {
      
        cy.get('.flex.gap-2.md\\:gap-3.items-center.px-3.py-2.text-accent')
            .contains('Next')
            .click();

        cy.get('.flex.gap-2.md\\:gap-3.items-center.px-3.py-2')
         .contains('Prev')
          .click();
    
        
        cy.url().should('not.include', '?page=2');



    });

    it("TC_94-Should be displayed details abot the product", () => {
      
        cy.get('.grid.grid-cols-2 a').first().click();


    
    });

    it("TC_97-Zooms in the product image on hover", () => {
      
        cy.get('.grid.grid-cols-2 a').first().click();

        cy.get('img[alt="Product"]')
          .first()
          .trigger("mouseover");

        cy.get('img[alt="Product"]')
          .first()
          .should("have.attr", "style")
          .and("include", "transform: scale(1.1)");  


  
    });

    it("TC_98-The product image should be changed", () => {
      
        cy.get('.grid.grid-cols-2 a').first().click();

        cy.get('div[style*="6821a78aaf9cb.jpeg"]').click();

        cy.get('img[alt="Product"]').should("have.attr", "src", "/storage/images/6821a78aaf9cb.jpeg");
    


    });

    it("TC_99-Should be displayed inside the rating section", () => {

        
        cy.get('.grid.grid-cols-2 a').first().click();

        cy.get('a[href="#review_section"]').click();

        cy.get('#review_section').should('be.visible');



    });

    it("TC_104-If click on Add to Cart the product should be added to the cart", () => {

       
        cy.get('.grid.grid-cols-2 a').first().click();

        cy.contains('button', 'Add to Cart').click();



    });

    it("TC_105-If click on By Now button the product should be automatically added to the cart, and the purchasing process should be displayed", () => {

       
        cy.get('.grid.grid-cols-2 a').first().click();
        
        cy.contains('button', 'Buy Now').click();


    });
    
    it("TC_108-If click on Next button next review page should be displayed", () => {


        cy.get('.grid.grid-cols-2 a').first().click();

        cy.get('#review_section').scrollIntoView();

        cy.contains('button', 'Next').click();


    });
    
    it("TC_108-If click on Next button next review page should be displayed", () => {


        cy.get('.grid.grid-cols-2 a').first().click();

        cy.contains('span', '+').click();


    });
    
  });

});