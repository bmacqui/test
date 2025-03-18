class SimpleCarousel extends HTMLElement {
    currentSlide = 0

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        
        this.handleProps()

        this.render()
    }

    connectedCallback() {
        this.updateSlides()
        this.shadowRoot.querySelector(".next").addEventListener("click", () => this.nextSlide())
        this.shadowRoot.querySelector(".prev").addEventListener("click", () => this.prevSlide())
    }

    render() {
        const link = document.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "css/simple-carousel.css")

        const wrapper = document.createElement("div")
        wrapper.innerHTML = `
            <div class="carousel">
                <div class="slides">
                    <slot name="slide" class="slide"></slot>
                </div>
                <div class="controls">
                    <button class="prev">&#10094;</button>
                    <button class="next">&#10095;</button>
                </div>
            </div>
        `

        this.shadowRoot.append(link, wrapper)
    }

    handleProps() {
        const width = this.getAttribute("slideWidth")
        const maxItems = this.getAttribute("maxItems")

        if (!width) {
            throw new Error('`width` is missing.')
        }

        if (!maxItems) {
            throw new Error('`maxItems` prop is missing.')
        }
        
        this.slideWidth = width
    }

    updateSlides() {
        const slides = this.shadowRoot.querySelector(".slides")
        const slot = this.shadowRoot.querySelector("slot")
        // retrieves the elements passed into a <slot>
        // nodeType `1` is an ElementNode (HTML tags)
        const nodes = slot.assignedNodes().filter(node => node.nodeType === 1)
        slides.innerHTML = ""

        nodes.forEach((node, index) => {
            const slide = document.createElement("div")
            slide.classList.add("slide")
            slide.style.width = `${this.slideWidth}px`
            slide.appendChild(node.cloneNode(true))
            slides.appendChild(slide)
        })

        this.slides = slides.children
        this.updatePosition()
    }

    updatePosition() {
        const containerWidth = this.offsetWidth
        const startingIndex = this.offsetWidth / this.slideWidth

        // console.log(containerWidth, startingIndex)

        const move = Math.floor(startingIndex) * parseInt(this.slideWidth)
        console.log(move)
        const offset = -this.currentSlide * parseInt(this.slideWidth)
        
        this.shadowRoot.querySelector(".slides").style.transform = `translateX(${offset}px)`
    }

    nextSlide() {
        console.log((this.currentSlide * parseInt(this.slideWidth)) < this.offsetWidth)
        if (this.currentSlide < this.slides.length - 1) {
            this.currentSlide++
            this.updatePosition()
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--
            this.updatePosition()
        }
    }
}

customElements.define("simple-carousel", SimpleCarousel)