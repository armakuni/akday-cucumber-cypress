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

export function headerContentShouldInclude(selector, expected) {
    cy.get(selector).contains(expected).should("exist");
}

export function powerOnOffButtonShouldExist() {
    cy.get("button").contains("AC").should("exist");
}

export function calculatorDisplayShouldExist() {
    cy.get("div.screen").should("exist");
}

export function screenIsShowingNumber(expected) {
    cy.get("div.screen").should("have.text", expected);

}

export function withWidgetChild(childSelector) {
    return {
        contentShouldBe(expected) {
            cy.get(this.selector)
                .find(childSelector)
                .contains(expected)
                .should("exist");
        }
    };
}

export function widgetShouldContain(expecteds) {

    const items = expecteds.hashes();
    for(const { selector, content } of items) {
        cy.get(this.selector)
            .find(selector)
            .contains(content)
            .should("exist");
    }

}
