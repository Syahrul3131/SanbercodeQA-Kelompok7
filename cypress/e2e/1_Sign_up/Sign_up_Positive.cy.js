 // Success Registrasi (Positive)
    it('Verify Sign up Successfully', () => {
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get('#FirstName').type('Kelompok') // input firstname
      cy.get('#Surname').type('7')
      cy.get('#E_post').type('kelompok7@gmail.com')
      cy.get('#Mobile').type('08123456789')
      cy.get('#Username').type('kelompok7')
      cy.get('#Password').type('kelompok')
      cy.get('#ConfirmPassword').type('kelompok')
      cy.get('#submit').click()

   cy.get('.label-success').should('be.visible','Registration Successful')
  })

    