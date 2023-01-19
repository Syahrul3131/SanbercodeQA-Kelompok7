describe('template spec', () => {

  // Success Registrasi
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
  })

  // Registrasi dengan email yang sudah terdaftar di sistem
  it('Sign up using the same username', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Kelompok')
    cy.get('#Surname').type('7')
    cy.get('#E_post').type('kelompok7@gmail.com') // email sudah terdaftar di sistem
    cy.get('#Mobile').type('08123456789')
    cy.get('#Username').type('kelompok7')
    cy.get('#Password').type('kelompok')
    cy.get('#ConfirmPassword').type('kelompok')
    cy.get('#submit').click()
  })
  
  // Empty FirstName
  it('Blank First Name', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    // empty first name
    cy.get('#Surname').type('7')
    cy.get('#E_post').type('kelompok7@gmail.com')
    cy.get('#Mobile').type('08123456789')
    cy.get('#Username').type('kelompok7')
    cy.get('#Password').type('kelompok')
    cy.get('#ConfirmPassword').type('kelompok')
    cy.get('#submit').click()
})

  // Empty Surname
  it('Blank Surname', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Kelompok')
    // empty surname
    cy.get('#E_post').type('kelompok7@gmail.com')
    cy.get('#Mobile').type('08123456789')
    cy.get('#Username').type('kelompok7')
    cy.get('#Password').type('kelompok')
    cy.get('#ConfirmPassword').type('kelompok')
    cy.get('#submit').click()
})

  // Empty E-post
  it('Blank E-post', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Kelompok')
    cy.get('#Surname').type('7')
    // empty E-Post
    cy.get('#Mobile').type('08123456789')
    cy.get('#Username').type('kelompok7')
    cy.get('#Password').type('kelompok')
    cy.get('#ConfirmPassword').type('kelompok')
    cy.get('#submit').click()
})

  // Empty Mobile
  it('Blank Mobile', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Kelompok')
    cy.get('#Surname').type('7')
    cy.get('#E_post').type('kelompok7@gmail.com')
    // empty Mobile
    cy.get('#Username').type('kelompok7')
    cy.get('#Password').type('kelompok')
    cy.get('#ConfirmPassword').type('kelompok')
    cy.get('#submit').click()
})

  // Empty Username
  it('Blank Username', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Kelompok')
    cy.get('#Surname').type('7')
    cy.get('#E_post').type('kelompok7@gmail.com')
    cy.get('#Mobile').type('08123456789')
    // empty Username
    cy.get('#Password').type('kelompok')
    cy.get('#ConfirmPassword').type('kelompok')
    cy.get('#submit').click()
})

  // Empty Password
  it('Blank Password', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Kelompok')
    cy.get('#Surname').type('7')
    cy.get('#E_post').type('kelompok7@gmail.com')
    cy.get('#Mobile').type('08123456789')
    cy.get('#Username').type('kelompok7')
    // empty Password
    cy.get('#ConfirmPassword').type('kelompok')
    cy.get('#submit').click()
})

  // Empty ConfirmPassword
  it('Blank ConfirmPassword', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get('#FirstName').type('Kelompok')
    cy.get('#Surname').type('7')
    cy.get('#E_post').type('kelompok7@gmail.com')
    cy.get('#Mobile').type('08123456789')
    cy.get('#Username').type('kelompok7')
    cy.get('#Password').type('kelompok')
    // empty ConfirmPassword
    cy.get('#submit').click()
})

  // Check Functionality Button Clear
  it('Verify button Clear Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get(':nth-child(7) > :nth-child(2) > .btn-secondary').click()
})

  // Check Success Login
  it('Verify Login Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
})
 
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

})