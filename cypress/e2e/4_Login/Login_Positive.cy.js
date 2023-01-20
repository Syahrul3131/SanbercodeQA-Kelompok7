  // Check Success Login (Positive)
  it('Verify Login Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()

    cy.get('h1').should('be.visible','Dashboard')
    cy.get('h3').should('be.visible','Welcome kelompok7')
    cy.get('h2').should('be.visible','Customer Details')


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})