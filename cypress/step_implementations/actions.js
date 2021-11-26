export function multiPressButton(buttonText, pressCount) {
    for(let i = 0; i < (pressCount || 1); i++)
        cy.get("button").contains(buttonText).click();
}

export function pressCalculatorButtons(data) {
    const buttonTexts = data.hashes().map(x => x.button);
    for(let buttonText of buttonTexts)
        cy.get("button").contains(buttonText).click();
}
