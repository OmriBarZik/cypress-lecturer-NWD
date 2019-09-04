/// <reference types="Cypress" />

context('download book button', () => {
  beforeEach(() => {
    cy.visit('https://hebdevbook.com/')
  })

  it('test download book button when logout', () => {
    cy.get('.button') // Get the download book button
                      // if the element is not found, the test will fail.
      .contains('התחברו עכשיו')  // Find and Select the matching element
                                  // and again, if the element is not found, the test will fail.
  })

  
  it('test download book button when login - manual', () => {
    cy.get('.button').click();  // Get the download book button and clicks it.
                                // this tests if the button redirect to the login page
    cy.readFile('./Cypress/support/login.json').then( (login) => { // Read the json file and convert it into an object
      cy.get('#user_login').type(login.username) // Write the username into the input
      cy.get('#user_pass').type(login.password) // Write the password into the input
    })
    cy.get('#wp-submit').click() // Submit the form
    cy.visit('https://hebdevbook.com/') // Returning to the main page
    cy.get('.button') // Get the download book button
      .should('contain','להורדת הספר') // Check if the expected text is on the button
      .and('have.attr', 'href', '/wp-admin/admin-post.php?action=download_book') // Check if the expected hyperlink is on the button
  })

  it('test download book button when login - request', () => {
    cy.readFile('./Cypress/support/login.json').then( (login) => { // Read the json file and convert it into an object
      cy.login(login.username, login.password) // Run custom function to login (cypress\support\login.js)
    })
    cy.reload() // Reload the page to update the button
    // Get the download book button
    cy.get('.button').then(($button) => {
      // Test if the button object contains the expected properties
      expect($button).to.contain('להורדת הספר')
      expect($button).to.have.attr('href','/wp-admin/admin-post.php?action=download_book')
    })
  })
})
