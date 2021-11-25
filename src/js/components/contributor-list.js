/* HTML templates */

const renderContributorHTML = contributor => `

    <li class="contributor">${contributor}</li>

`;

const renderHTML = contributors => `

    <heading>Contributors</heading>
    <ul>
        ${contributors
            .map(renderContributorHTML)
            .join("\n")}
    </ul>

`;

/* Web component */

class ContributorList extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        ensureStyleSheet();
        this.render();
    }

    async render() {

        try {

            const src = this.getAttribute("src");
            const data = await fetchData(src);
            this.innerHTML = renderHTML(data);

        } catch(err) {

            this.innerHTML = "Error: " + err.message;
            this.dispatchEvent(new CustomEvent("render:error", { detail: err.stack }));

        }

    }

}

customElements.define("contributor-list", ContributorList);

/* module scoped */

function ensureStyleSheet() {
    if (!document.querySelector("head link#contributor-list-css"))
        addStyleSheet();
}

function addStyleSheet() {
    const stylesheet = document.createElement("LINK");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", import.meta.url.replace(".js", ".css"));
    stylesheet.id = "contributor-list-css";
    document.head.appendChild(stylesheet);
}

async function fetchData(src) {
    const url = new URL(src, location.href);
    url.searchParams.set("cache-bust", Date.now());
    const fetched = await fetch(url);
    if (!fetched.ok)
        throw new Error(`Server returned ${fetched.status} ${fetched.statusText} fetching ${url}`);
    return await fetched.json();
}
