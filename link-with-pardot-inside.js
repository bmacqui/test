class LinkWithPardotInside extends HTMLElement {
    constructor() {
        super();
        this.handleProps();
    }

    handleProps() {
        this.hrefUrl = this.getAttribute("href-url") || "#";
        this.pardotRegion = this.getAttribute("pardot-region")
    }

    connectedCallback() {
        this.innerHTML = `
            <a pardot-region="${this.pardotRegion}"
                href="${this.hrefUrl}"
            >
                <slot></slot>
            </a>
        `
    }
}

customElements.define("link-with-pardot-inside", LinkWithPardotInside);