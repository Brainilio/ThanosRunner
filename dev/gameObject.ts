class gameObject {  
    protected x: number
    protected y: number
    protected div: HTMLElement

    constructor(el: any, x:number, y:number) { 
        this.x = x 
        this.y = y 
        this.div = document.createElement(el)
        document.body.appendChild(this.div)
    }

    update() {   
        this.div.style.transform = `translate(${this.x}px, ${this.y}px`
    }
}