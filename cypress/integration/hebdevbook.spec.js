/// <reference types="Cypress" />

context('download book button', () => {
  beforeEach(() => {
    cy.visit('https://hebdevbook.com/')
  })

  it('test download book button when logout', () => {
    cy.get('.button').contains('התחברו עכשיו')
  })
})
