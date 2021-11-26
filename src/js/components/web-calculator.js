/* HTML templates */

const renderHTML = () => `

    <header>CASIO</header>
    <div class="screen">0</div>
    <button id="2">2</button>
    <button id="+">+</button>
    <button id="3">3</button>
    <button id="=">=</button>
    <button class="meta" id="ac">AC</button>

`;

/* Custom element */

class WebCalculator extends HTMLElement {

    #stack;
    #display = 0;

    constructor() {
        super();
        this.initEventHandlers();
        this.#stack = [];
    }

    initEventHandlers() {
        this.addEventListener("click", e => {
            switch (e.target.id) {
                case "ac":
                    while(this.#stack.length)
                        this.#stack.pop();
                    break;
                case "2":
                    this.#stack.push(2);
                    break;
                case "3":
                    this.#stack.push(3);
                    break;
                case "+":
                    this.#stack.push("+");
                    break;
                case "=":
                    this.#stack = [ this.evaluate() ];
                    break;
            }
            this.renderScreen(this.#stack[this.#stack.length -1] || "0");
        });
    }

    connectedCallback() {
        ensureStyleSheet();
        this.render();
    }

    evaluate() {

        const expr = this.#stack.join(" ");
        const total = eval(expr);
        return total || "0";

    }

    renderScreen(value) {
        this.querySelector(".screen").innerHTML = value;
    }

    render() {

        try {

            this.innerHTML = renderHTML();

        } catch (err) {

            this.innerHTML = "Error: " + err.message;
            this.dispatchEvent(new CustomEvent("render:error", { detail: err.stack }));

        }

    }

}

customElements.define("web-calculator", WebCalculator);

/* module scoped */

function ensureStyleSheet() {
    if (!document.querySelector("head link#web-calculator-css"))
        addStyleSheet();
}

function addStyleSheet() {
    try {
        const stylesheet = document.createElement("LINK");
        stylesheet.setAttribute("rel", "stylesheet");
        stylesheet.setAttribute("href",
            import.meta.url.replace(".js", ".css"));
        stylesheet.id = "web-calculator-css";
        document.head.appendChild(stylesheet);
    } catch (err) {
        console.error(err);
    }
}
