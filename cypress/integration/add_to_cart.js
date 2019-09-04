/// <reference types="Cypress" />

/*

cy - the cypress global object, you always act on it

Browser:
cy.visit() - visits url

Getters:
cy.get() - get element by css selector
cy.contains() - get element by the text it contains
.within() - acts inside previous element

Actions:
.click() - clicks in a element
.type() - types text into an input
.clear() - clears input value

Wrappers:
.wrap() - wraps html element into cypress object (so you can call methods)

*/












































// describe("Add to cart", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   it("adds tickets to cart", () => {
//     cy.contains("Sporting").within(li => {
//       cy.wrap(li.find("input")).type(10)
//     });
//     cy.contains("Sporting").within(li => {
//       cy.wrap(li.find("button")).click()
//     });

//     cy.contains("€100");

//     cy.contains("Benfica").within(li => {
//       cy.wrap(li.find("input")).type(2)
//     });

//     cy.contains("Benfica").within(li => {
//       cy.wrap(li.find("button")).click()
//     });

//     cy.contains("€140");
//   });

//   it("updates tickets in cart", () => {
//     cy.addToCart("Sporting", 10);
//     cy.addToCart("Benfica", 2);

//     cy.contains("Benfica").within(li => {
//       cy.get(li.find("input"))
//         .clear()
//         .type(1);
//     });

//     cy.contains("Benfica").within(li => {
//       cy.wrap(li.find("button"))
//         .click()
//     })

//     cy.contains("€120");
//   });

//   it('removes cart line if number of tickets is 0', () => {
//     cy.addToCart("Sporting", 10);

//     cy.get('[data-testid="cart"]').within((cart) => {
//       cy.wrap(cart).contains('Sporting');
//     });

//     cy.removeFromCart('Sporting');

//     cy.get('[data-testid="cart"]').within((cart) => {
//       cy.wrap(cart).contains('Sporting').should('not.exist');
//     });
//   })

//   it('should buy tickets', () => {
//     cy.addToCart('Sporting', 10);

//     cy.on('window:alert', (message) => {
//       expect(message).to.include('10');
//       expect(message).to.include('€100');
//     })

//     cy.contains('BUY').click();
//   })

//   it('should read price', () => {
//     cy.addToCart('Sporting', 10);

//     cy.contains("€100");

//     cy.get('main').toMatchImageSnapshot({
//       "createDiffImage": true,
//       "threshold": 0.0001,
//     })
//   })
// });
