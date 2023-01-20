// Check Successfully Edit Details Customer (Positive)
it('Verify Edit Details Customer', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get('#searching').type('Sanber')
    cy.get('.container > div > form > .btn').click()
    cy.get(':nth-child(5) > :nth-child(7) > .btn-outline-info').click()
    cy.get('.btn-outline-primary').click()
    cy.get('#Name').clear()
    cy.get('#Name').type('Lores')
    cy.get('.col-md-offset-2 > .btn').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  })