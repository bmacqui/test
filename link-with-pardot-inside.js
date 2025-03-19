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
        setTimeout(() => {
            this.render()
        }, 1000)
    }

    render() {
        const link = document.createElement("a");
        link.href = this.getAttribute("href-url") || "#";
        link.setAttribute("pardot-region", this.getAttribute("pardot-region") || "");
    
        link.innerHTML = this.innerHTML;

        this.innerHTML = "";
        this.appendChild(link);
    }
}

customElements.define("link-with-pardot-inside", LinkWithPardotInside);