describe("Add to cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds tickets to cart", () => {
    cy.contains("Sporting").within(li => {
      cy.get(li.find("input")).type(10)
    });
    cy.contains("Sporting").within(li => {
      cy.get(li.find("button")).click()
    });

    cy.contains("€100");

    cy.contains("Benfica").within(li => {
      cy.get(li.find("input")).type(2)
    });

    cy.contains("Benfica").within(li => {
      cy.get(li.find("button")).click()
    });

    cy.contains("€140");
  });

  it("updates tickets in cart", () => {
    cy.addToCart("Sporting", 10);
    cy.addToCart("Benfica", 2);

    cy.contains("Benfica").within(li => {
      cy.get(li.find("input"))
        .clear()
        .type(1);
    });

    cy.contains("Benfica").within(li => {
      cy.get(li.find("button"))
        .click()
    })

    cy.contains("€120");
  });

  it('removes cart line if number of tickets is 0', () => {
    cy.addToCart("Sporting", 10);

    cy.contains('div', 'Cart').within((cart) => {
      cy.get(cart).contains('Sporting');
    });

    cy.root().removeFromCart('Sporting');

    cy.contains('div', 'Cart').within((cart) => {
      cy.get(cart).contains('Sporting').should('not.exist');
    });
  })

  it('should buy tickets', () => {
    cy.addToCart('Sporting', 10);

    cy.on('window:alert', (message) => {
      expect(message).to.include('10');
      expect(message).to.include('€100');
    })

    cy.contains('BUY').click();
  })
});
