// Check Edit in Details Page - Failed Blank All Fields (Negative)
it('Verify Edit in Details Page Failed - Blank All Fields', () => {
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
    cy.get('#Company').clear()
    cy.get('#Address').clear()
    cy.get('#City').clear()
    cy.get('#Phone').clear()
    cy.get('#Email').clear()
    cy.get('.col-md-offset-2 > .btn').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  })