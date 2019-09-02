Cypress.Commands.add('addToCart', (team, nrOfTickets) => {
    cy.contains(team).within(li => cy.get(li.find('input')).type(nrOfTickets))
    cy.contains(team).within(li => cy.get(li.find('button')).click())
})

Cypress.Commands.add('removeFromCart', (team) => {
    cy.contains(team).within(li => cy.get(li.find('input')).clear())
    cy.contains(team).within(li => cy.get(li.find('button')).click())
})
