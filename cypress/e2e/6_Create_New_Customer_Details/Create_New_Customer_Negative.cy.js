describe('Create New Customer Negative', () => {
 // Check Fill All The Fields with The Same Data
 it('Verify Failed Create New - Input Same Data', () => {
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
})

 // Check Blank Name
 it('Verify Failed Create New - Blank Name', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .btn').click()
    // Empty Name
    cy.get('#Company').type('Sanbersy')
    cy.get('#Address').type('Jl. Sukasari I No.4')
    cy.get('#City').type('Bandung')
    cy.get('#Phone').type('+6282214714583')
    cy.get('#Email').type('support@sanbersy.com')
    cy.get('.col-md-offset-2 > .btn').click()
})

  // Check Blank Company
  it('Verify Failed Create New - Blank Company', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .btn').click()
    cy.get('#Name').type('Sanber')
    // Empty Company
    cy.get('#Address').type('Jl. Sukasari I No.4')
    cy.get('#City').type('Bandung')
    cy.get('#Phone').type('+6282214714583')
    cy.get('#Email').type('support@sanbersy.com')
    cy.get('.col-md-offset-2 > .btn').click()
})

  // Check Blank Address
  it('Verify Failed Create New - Blank Address', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .btn').click()
    cy.get('#Name').type('Sanber')
    cy.get('#Company').type('Sanbersy')
    // Empty Address
    cy.get('#City').type('Bandung')
    cy.get('#Phone').type('+6282214714583')
    cy.get('#Email').type('support@sanbersy.com')
    cy.get('.col-md-offset-2 > .btn').click()
})

  // Check Blank City
  it('Verify Failed Create New - Blank City', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .btn').click()
    cy.get('#Name').type('Sanber')
    cy.get('#Company').type('Sanbersy')
    cy.get('#Address').type('Jl. Sukasari I No.4')
    // Empty City
    cy.get('#Phone').type('+6282214714583')
    cy.get('#Email').type('support@sanbersy.com')
    cy.get('.col-md-offset-2 > .btn').click()
})

  // Check Blank Phone
  it('Verify Failed Create New - Blank Phone', () => {
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
    // Empty Phone
    cy.get('#Email').type('support@sanbersy.com')
    cy.get('.col-md-offset-2 > .btn').click()
})

  // Check Blank E-mail
  it('Verify Failed Create New - Blank E-mail', () => {
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
    // Empty Email
    cy.get('.col-md-offset-2 > .btn').click()
})

  // Check Fill Just one Field
  it('Verify Failed Create New - Fill Just one Field', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .btn').click()
    cy.get('#Address').type('Jl. Sukasari I No.4')
    cy.get('.col-md-offset-2 > .btn').click()
})

 // Check Blank All Fields
 it('Verify Failed Create New - Blank All Fields', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get(':nth-child(4) > .btn').click()
  cy.get('.col-md-offset-2 > .btn').click()
})

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})