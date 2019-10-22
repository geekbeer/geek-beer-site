/// <reference types="Cypress" />

describe("start", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have an h1 tag with Geek Beer text", () => {
    cy.get('[data-test="geek-beer"]').should("contain", "Geek Beer");
  });

  it("should list past GeekBeer events", () => {
    const numberOfEvents = 10;
    cy.get('[data-test="geek-beer-events"] li')
      .should("have.length", numberOfEvents);
  });
});
