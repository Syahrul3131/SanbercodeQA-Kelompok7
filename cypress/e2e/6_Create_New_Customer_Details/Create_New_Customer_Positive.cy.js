 // Check success create new customer (Positive)
 it('Verify Create New Customer Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .btn').click()
    cy.get('#Name').type('Sanber')
    cy.get('#Company').type('Sanbersy')
    cy.get('#Address').type('Jl. Sukasari I No.4')
    cy.get('#City').type('Bandung')
    cy.get('#Phone').type('+6282214714583')
    cy.get('#Email').type('support@sanbersy.com')
    cy.get('.col-md-offset-2 > .btn').click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})