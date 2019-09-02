describe("Basic rendering", () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it("renders basic structure", () => {
    cy.get("header").contains("Buy football tickets");
  });

  it('renders games from 3 major teams', () => {
    cy.get("main").contains("Benfica");
    cy.get("main").contains("Porto");
    cy.get("main").contains("Braga");
  })

  it('renders cart', () => {
    cy.contains("Final price");
    cy.contains("Cart");
  })
});
