/// <reference path="GameObject.ts"/>
class Thanos extends GameObject {  

                    protected speed:number = 0; 
            
                    frames = 10
                    frame = 0
                    frameWidth = 102
                    speedcounter = 0

                    private leftkey: number;
                    private rightkey: number;
                    private upkey: number; 

                    public leftSpeed: number = 0 
                    private rightSpeed: number = 0 
                    private upSpeed: number = 0 

                   

                constructor() { 
                    super("thanos", 0, 0)
                       
                        
                        this.frame = 0                    
                        this.y = 450
                        this.x = 450

                        this.leftkey = 68
                        this.rightkey = 65
                        this.upkey = 32

                        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
                        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

                        this.update()
                    
                    }


                    private onKeyDown(e: KeyboardEvent): void {

                        switch (e.keyCode) {
                                case this.rightkey:
                                    this.leftSpeed = 10
                                    console.log("ik klik iets")
                                break 
                                case this.leftkey: 
                                    this.rightSpeed = 10
                                    console.log("ik klik iets")
                                break 
                                case this.upkey: 
                                    this.upSpeed = 10
                                    
                                    console.log("ik spring!")

                    }
                    }

                    private onKeyUp(e: KeyboardEvent): void {

                        switch (e.keyCode) {
                            case this.rightkey:
                                this.leftSpeed = 0
                                console.log("ik klik niks")
                                break
                            case this.leftkey:
                                this.rightSpeed = 0
                                console.log("ik klik niks")
                                break
                            case this.upkey: 
                                this.upSpeed = -5
                                
                                console.log("ik zak omlaag!")

                        }
                    }


                    public update() {   
                        this.y = this.y - this.upSpeed 
                        this.x = this.x - this.leftSpeed + this.rightSpeed
                        
                        if(this.y > 450) { 
                            
                            this.y = 450
                            this.upSpeed = 0
                        }

                        if(this.x > window.innerWidth) {  
                            this.rightSpeed = 0
                            
                        }

                        this.speedcounter++

                        let framerate = 5
                        if(this.speedcounter%framerate == 0) 
                        { 
                            this.frame++
                            
                        }
                        if(this.frame >= this.frames) this.frame = 1 

                        console.log(this.frame);
                        

                        let pos = 0 - (this.frame*this.frameWidth)
                        this.div.style.backgroundPosition = pos + 'px -555px'


                        
                        if(onkeyup) {
                            this.frame = 0
                        }
                       
                       
                        this.div.style.left = `${this.x}px`;
                        this.div.style.top = `${this.y}px`;
                        
                       
                    }





                    public getRectangle() {
                        return this.div.getBoundingClientRect()
                    }

                  


    

}