class Thanos {  

                    protected speed:number = 0; 
            
                    frames = 10
                    frame = 0 
                    frameWidth = 102
                    speedcounter = 0 

                    private x:number = 0; 
                    private y:number = 0; 

                    private leftkey: number;
                    private rightkey: number;

                    private leftSpeed: number = 0 
                    private rightSpeed: number = 0 

                    protected htmlElement:HTMLElement; 

                constructor() { 
                
                        this.htmlElement = document.createElement("thanos");
                        document.body.appendChild(this.htmlElement);
                        
                        this.frame = 0                    
                        this.y = 450
                        this.x = 450

                        this.leftkey = 68
                        this.rightkey = 65

                        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
                        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

                        this.update()
                    
                    }


                    private onKeyDown(e: KeyboardEvent): void {

                        switch (e.keyCode) {
                                case this.rightkey:
                                    this.leftSpeed = 0
                                break 
                                case this.leftkey: 
                                    this.rightSpeed = 0
                                break 

                    }
                    }

                    private onKeyUp(e: KeyboardEvent): void {

                        switch (e.keyCode) {
                            case this.rightkey:
                                this.leftSpeed = 0
                                break
                            case this.leftkey:
                                this.rightSpeed = 0
                                break
                        }
                    }


                    public update() {   

                        

                        if(this.speedcounter%1 == 0) this.frame++
                        if(this.frame >= this.frames) this.frame = 0 

                            let pos = 0 - (this.frame*this.frameWidth)
                            this.htmlElement.style.backgroundPosition = pos + 'px -555px'


                        
                        if(onkeyup) {
                            this.frame = 0
                        }
                       
                       
                        this.htmlElement.style.left = `${this.x}px`;
                        this.htmlElement.style.top = `${this.y}px`;
                        requestAnimationFrame(()=>this.update())
                       
                    }

                    public getRectangle() {
                        return this.htmlElement.getBoundingClientRect()
                    }

                  


    

}