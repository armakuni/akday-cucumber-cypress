export function mainHeadingShouldContain(expected) {
    cy.get("h1").contains(expected).should("exist");
}

export function pageTitleShouldContain(expected) {
    cy.title().should("include", expected);
}

export function contributorsListShouldInclude(expected) {
    cy.get("contributor-list li").contains(expected).should("exist");
}

export function contributorsListShouldHaveTitle(expected) {
    cy.get("contributor-list heading").contains(expected).should("exist");
}
