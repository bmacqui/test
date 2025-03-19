class LinkWithPardotInside extends HTMLElement {
    constructor() {
        super();
        this.handleProps();
        this.render()
    }

    handleProps() {
        this.hrefUrl = this.getAttribute("href-url") || "#";
        this.pardotRegion = this.getAttribute("pardot-region") || "";
        this.text = this.getAttribute("text")
    }


    render() {
        // const wrapper = document.createElement("div");

        // wrapper.innerHTML = `
        //     <a href="${this.hrefUrl}">
        //         ${this.text}
        //     </a>
        // `
        // this.appendChild(wrapper)

        const link = document.createElement("a")
        link.setAttribute("href", this.hrefUrl)
        link.setAttribute("pardot-region", this.pardotRegion)
        link.textContent = this.text

        this.appendChild(link)
    }
}

customElements.define("link-with-pardot-inside", LinkWithPardotInside);