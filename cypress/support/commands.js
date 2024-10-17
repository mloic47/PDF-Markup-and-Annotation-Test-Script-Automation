
import { LoginPage } from '../e2e/pages/LoginPage'
import { user } from '../fixtures/usersTestData'

const loginPage = new LoginPage()
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("loginAsSuperAdmin", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    cy.visit('https://app.zipboard.co')
    cy.get(loginPage.usernameField).type(user.superAdmin.username)
    cy.get(loginPage.passwordField).type(user.superAdmin.password)
    cy.get(loginPage.loginButton).click()
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })