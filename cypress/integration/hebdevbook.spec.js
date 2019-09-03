/// <reference types="Cypress" />

context('download book button', () => {
  beforeEach(() => {
    cy.visit('https://hebdevbook.com/')
  })

  it('test download book button when logout', () => {
    cy.get('.button').contains('התחברו עכשיו')
  })

  
  it('test download book button when login - manual', () => {
    cy.get('.button').click();
    cy.readFile('./Cypress/support/login.json').then( (login) => {
      cy.get('#user_login').type(login.username)
      cy.get('#user_pass').type(login.password)
    })
    cy.get('#wp-submit').click()
    cy.visit('https://hebdevbook.com/')
    cy.get('.button').should('contain','להורדת הספר')
    .and('have.attr', 'href', '/wp-admin/admin-post.php?action=download_book')
  })

  it('test download book button when login - request', () => {
    cy.readFile('./Cypress/support/login.json').then( (login) => {
      cy.login(login.username, login.password)
    })
    cy.reload()
    cy.get('.button').should('contain','להורדת הספר')
    .and('have.attr', 'href', '/wp-admin/admin-post.php?action=download_book')
  })
})
