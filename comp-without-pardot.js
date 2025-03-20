class CompWithoutPardot extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })

        this.render()
    }
    render() {
        const wrapper = document.createElement("div")

        wrapper.innerHTML = `
            <slot></slot>
        `

        this.shadowRoot.append(wrapper)
    }
}

customElements.define("without-pardot", CompWithoutPardot)