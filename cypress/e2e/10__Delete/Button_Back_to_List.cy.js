// Check Verify button BACK TO LIST Successfully 
it('Verify button BACK TO LIST Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get('#searching').type('John')
    cy.get('.container > div > form > .btn').click()
    cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-danger'). click()
    cy.get('.btn-link').click()
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })