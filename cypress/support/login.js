/// <reference types="Cypress" />

function login(username, password) {
	cy.request({
		url: '/wp-login.php', // the login url
		method: 'POST',
		form: true, // send the data as a form
		headers: {
			wordpress_test_cookie: 'WP+Cookie+check', // to pass the cookie check
		},
		body: {
			log: username, // username
			pwd: password, // password
			'wp-submit': 'LogIn',
			redirect_to: '/wp-admin/',
			testcookie: 1, // to pass the cookie check
		},
	})
}

Cypress.Commands.add('login', login)
