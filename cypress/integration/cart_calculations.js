/// <reference types="Cypress" />

describe('Calculations', () => {
    it('should sum tickerts values', () => {
        cy.visit('/');
        cy.addToCart('Benfica', 2);
        cy.addToCart('Sporting', 2);

        cy.get('[data-testid="cart"]').within(el => {
            cy.wrap(el)
                .contains('Benfica')
                .within(el => {
                    cy.wrap(el).get('button').click();
                })
        })


        cy.get('[data-testid="cart"]')
            .contains('Benfica')
            .should('not.exist');
    })

    it(' should match snapshot', () => {
        cy.visit('/');

        cy.get('[data-testid="cart"]').toMatchImageSnapshot({
            threshold: 0.00001
        })
    })
})
