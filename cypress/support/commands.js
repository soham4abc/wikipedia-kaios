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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
[
  'downArrow',
  'upArrow',
  'leftArrow',
  'rightArrow',
  'backspace',
  'enter'
].forEach((key) => {
  Cypress.Commands.add(key, () => {
    cy.get('body').type(`{${key}}`)
  })
})

Cypress.Commands.add('clickCloseButton', ()=>{
  cy.get('label.left').contains('Close').click()
})

Cypress.Commands.add('clickSettingsButton', ()=>{
  cy.get('label.left').contains('Settings').click()
})
Cypress.Commands.add('navigateToHomePage', ()=>{
  cy.visit('http://127.0.0.1:8080')
})