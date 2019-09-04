// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-snapshots/commands';

// Cypress.Commands.add('addToCart', (team, nrOfTickets) => {
//     cy.contains(team).within(li => cy.get(li.find('input')).type(nrOfTickets))
//     cy.contains(team).within(li => cy.get(li.find('button')).click())
// })

// Cypress.Commands.add('removeFromCart', (team) => {
//     cy.contains(team).within(li => cy.get(li.find('input')).clear())
//     cy.contains(team).within(li => cy.get(li.find('button')).click())
// })

// Alternatively you can use CommonJS syntax:
// require('./commands')
