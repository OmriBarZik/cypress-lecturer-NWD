/// <reference types="Cypress" />

context('download book button', () => {
	beforeEach(() => {
		// run before each test
		cy.visit('https://hebdevbook.com/') // visit te tested site
	})

	it('test download book button when logout', () => {
		cy.get('.button') // Get the download book button
			// if the element is not found, the test will fail.
			.contains('זה הולך להיכשל') // Find and Select the matching element
		// and again, if the element is not found, the test will fail.
	})
})
