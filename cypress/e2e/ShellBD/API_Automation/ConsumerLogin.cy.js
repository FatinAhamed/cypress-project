describe('Consumer Login API Test', () => {

  it('Should login successfully with valid mobile and password', () => {

    const phone = '0185100944';

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
  

       expect(response.status).to.eq(200);


  
    });
  });
});