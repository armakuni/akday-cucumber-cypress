/* HTML templates */

const css = `
muriels-widget header {
    margin: 10px 0;
    text-decoration: underline;
}
`;

const renderHTML = () => `

    <header>Muriel's Widget</header>
    <button class="dec">-</button>
    <span class="counter">0</span>
    <button class="inc">+</button>
    <style>${css}</style>
`;

/* Custom element */

class MurielsWidget extends HTMLElement {

    #counter = 0;

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        this.innerHTML = renderHTML();
        this.updateCounter();
        this.addEventListener("click", this.handleClick);
    }

    updateCounter() {
        this.querySelector(".counter").innerHTML = this.#counter;
    }

    handleClick(e) {
        switch(e.target.className) {
            case "dec":
                this.#counter -= 1;
                break;
            case "inc":
                this.#counter += 1;
                break;
            default:
                return;
        }
        this.updateCounter();
    }

}

customElements.define("muriels-widget", MurielsWidget);
