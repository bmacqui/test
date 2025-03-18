class SectionHeading extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open"})

        this.handleProps()

        this.render()
    }

    connectedCallback() {

    }

    handleProps() {
        this.color = this.getAttribute("color")
        this.textAlign = this.getAttribute("textAlign")
    }

    render() {
        const wrapper = document.createElement("div")
        wrapper.innerHTML = `
            <style>
                .section-heading {
                    color: ${this.color};
                    font-size: 2.5rem;
                    text-align: ${this.textAlign};
                }
            </style>
            <div class="section-heading">
                <slot></slot>
            </div>
        `

        this.shadowRoot.append(wrapper)
    }
}

customElements.define("section-heading", SectionHeading)