class infiniteLoop {  
    protected x: number
    protected y: number
    protected div: HTMLElement

   

    constructor(el: any, x:number, y:number) {  
        this.x = x 
        this.y = y
        this.div = document.createElement(el)
        document.body.appendChild(this.div)
        
        console.log("hoi");
    }

    update() {   
        this.Loop();
    }

    Loop() {  
        this.x--; 
        this.div.style.top = `translate(${this.y}px)` 
        this.div.style.backgroundPosition = this.x + `px 0px`;
        requestAnimationFrame(()=> this.update())
    }

    
}