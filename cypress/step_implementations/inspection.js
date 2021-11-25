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
    cy.get("contributor-list header").contains(expected).should("exist");
}

export function elementBySelectorShouldExist(selector) {
    cy.get(selector).should("exist");
}

export function elementContentShouldInclude(selector, expected) {
    cy.get(selector).contains(expected).should("exist");
}
