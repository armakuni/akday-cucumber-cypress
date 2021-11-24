export function mainHeadingShouldContain(expected) {
    cy.get("h1").contains(expected).should("exist");
}

export function pageTitleShouldContain(expected) {
    cy.title().should("include", expected);
}

