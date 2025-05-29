describe('Consumer Login API Negative Test', () => {

  it('Should not login successfully with invalid mobile and valid password', () => {

    const phone = '01345678902';

    const password = '123456';

    cy.request({

      method: 'POST',

      url: 'https://auth.rkpl-agami.com/api/consumer-login',

       body: {

        mobile: `88${phone}`,

        password: password

      },

      failOnStatusCode: false,

      })
      
       .then((response) => {
  

       expect(response.status).to.not.eq(200);

       

       


  
    });
  });
});