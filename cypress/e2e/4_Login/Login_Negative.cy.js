describe('Login Negative', () => {

// Check Failed Login - Wrong Username
it('Verify Login Failed - Wrong Username', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('group7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()

    cy.get('.alert-danger').should('be.visible','Wrong username or password')
})

  // Check Failed Login - Wrong Password
  it('Verify Login Failed - Wrong Password', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('group')
    cy.get('.btn-primary').click()

    cy.get('.alert-danger').should('be.visible','')
})

  // Check Failed Login - Empty Username & Password
  it('Verify Login Failed - Blank Username & Password', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    // Empty Username
    // Empty Password
    cy.get('.btn-primary').click()

    cy.get('.alert-danger').should('be.visible','')
})

        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})