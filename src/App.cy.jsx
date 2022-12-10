import App from "./App";

describe("<App>", () => {
  it("mounts", () => {
    cy.mount(<App />);
  });
});

it('supports an "initial" prop to set the value', () => {
  cy.mount(<App initial={100} />);
  cy.get("[data-cy=counter]").should("have.text", "Current Value : 0");
});

it("when the increment button is pressed, the counter is incremented", () => {
  cy.mount(<App />);
  cy.get("[data-cy=increment]").click();
  cy.get("[data-cy=counter]").should("have.text", "Current Value : 1");
});

it("when the decrement button is pressed, the counter is decremented", () => {
  cy.mount(<App />);
  cy.get("[data-cy=decrement]").click();
  cy.get("[data-cy=counter]").should("have.text", "Current Value : -1");
});
