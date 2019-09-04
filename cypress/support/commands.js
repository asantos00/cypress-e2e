/// <reference types="Cypress" />


Cypress.Commands.add('addToCart', (team, nrOfTickets) => {
    cy.contains(team).within(el => {
        cy.wrap(el)
            .get('input')
            .clear()
            .type(nrOfTickets)
            .get('button').click();
    })
})
