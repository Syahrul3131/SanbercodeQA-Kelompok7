describe('Sign up Negative', () => {
    
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

    cy.get(':nth-child(12) > .col-md-offset-2').should('be.visible','Username already exist')
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

    cy.get('#FirstName-error').should('be.visible','Please enter first name')
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

    cy.get('#Surname-error').should('be.visible','Please enter surname')
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

    cy.get('#Username-error').should('be.visible','Please enter username')
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

    cy.get('#ConfirmPassword-error').should('be.visible',"'Confirm password' and 'Password' do not match.")
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

    cy.get('#ConfirmPassword-error').should('be.visible',"'Confirm password' and 'Password' do not match.")
})

})