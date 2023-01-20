describe('Automation Testing Website', () => {

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

  // Check Functionality Button Register Here
  it('Verify button REGISTER HERE Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('.btn > a').click()
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
 
  // Check Failed Login - Wrong Username
  it('Verify Login Failed - Wrong Username', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('group7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
})

  // Check Failed Login - Wrong Password
  it('Verify Login Failed - Wrong Password', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('group')
    cy.get('.btn-primary').click()
})

  // Check Failed Login - Empty Username & Password
  it('Verify Login Failed - Blank Username & Password', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    // Empty Username
    // Empty Password
    cy.get('.btn-primary').click()
})

  // Check Success Logout
  it('Verify Log out Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
})

  // Check success create new customer
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
})

  // Check success hit button Back To List
  it('Verify button BACK TO LIST Successfully', () => {
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
    cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .btn').click()
    cy.get(':nth-child(3) > .btn').click()
})

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

// Check Search by Name Customer
it('Verify Search Successfully - Search by Name Customer', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
})

// Check Search Uncreated Name Customer
it('Verify Search Failed - Search Uncreated Name Customer', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Gak Ada')
  cy.get('.container > div > form > .btn').click()
})

// Check Search Nothing
it('Verify Search Failed - Search Nothing', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('.container > div > form > .btn').click()
})

// Check Edit Nama Customer
 it('Verify Edit Successfully - Edit Nama Customer', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()
  cy.get('#Name').clear()
  cy.get('#Name').type('Sanbercode')
  cy.get('.col-md-offset-2 > .btn').click()
})

// Check Edit Email Customer
it('Verify Edit Successfully - Edit Email Customer', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()
  cy.get('#Email').clear()
  cy.get('#Email').type('sanbercode@sanbersy.com')
  cy.get('.col-md-offset-2 > .btn').click()
})

// Check hit button BACK TO LIST Successfully
it('Verify button BACK TO LIST Successfully', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()
  cy.get(':nth-child(3) > .btn').click()
})

// Check Blank Name Customer Field
it('Verify Edit Failed - Blank Name Customer Field', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()
  cy.get('#Name').clear()
  cy.get('.col-md-offset-2 > .btn').click()
})

// Check Blank Email Customer Field
it('Verify Edit Failed - Blank Email Customer Field', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()
  cy.get('#Email').clear()
  cy.get('.col-md-offset-2 > .btn').click()
})

// Check Blank All Field Field
it('Verify Edit Failed - Blank All Field', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()
  cy.get('#Name').clear()
  cy.get('#Company').clear()
  cy.get('#Address').clear()
  cy.get('#City').clear()
  cy.get('#Phone').clear()
  cy.get('#Email').clear()
  cy.get('.col-md-offset-2 > .btn').click()
})

// Check Blank All Field Field
it('Verify Edit Failed - Blank All Field', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(5) > :nth-child(7) > .btn-outline-info').click()
})

// Check Successfully Edit Details Customer
it('Verify Edit Failed - Edit Details Customer', () => {
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
})

// Check Edit in Details Page - Failed Blank All Fields
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
})

//Check hit button Back To List
it('Verify button BACK TO LIST Successfully', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('Sanber')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(5) > :nth-child(7) > .btn-outline-info').click()
  cy.get('.btn-outline-primary').click()
  cy.get(':nth-child(3) > .btn').click()
})

//Check Successfully Delete User
it('Verify Delete Successfully', () => {
  cy.visit('https://itera-qa.azurewebsites.net/')
  cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').type('kelompok7')
  cy.get(':nth-child(4) > :nth-child(2)').type('kelompok')
  cy.get('.btn-primary').click()
  cy.get('#searching').type('John')
  cy.get('.container > div > form > .btn').click()
  cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-danger'). click()
  cy.get('.btn-outline-danger').click()
})

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

})