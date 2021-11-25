export function multiPressButton(buttonText, pressCount) {
    for(let i = 0; i < (pressCount || 1); i++)
        cy.get("button").contains(buttonText).click();
}
