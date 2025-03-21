class LinkWithPardotInside extends HTMLElement {
    constructor() {
        super();
        this.handleProps();
    }

    handleProps() {
        this.hrefUrl = this.getAttribute("href-url") || "#";
        this.pardotRegion = this.getAttribute("pardot-region") || "";
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = document.createElement("a");
        link.href = this.getAttribute("href-url") || "#";
        link.setAttribute("pardot-region", this.getAttribute("pardot-region") || "");
        link.textContent = this.textContent

        // gets the innerHTML of the web component (plain text) and inserts to the link
        // link.innerHTML = this.innerHTML;

        // removes inner html
        this.innerHTML = "";
        this.appendChild(link);
    }
}

customElements.define("link-with-pardot-inside", LinkWithPardotInside);