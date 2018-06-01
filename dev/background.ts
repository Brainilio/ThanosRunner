
class background {   

    protected speed:number = 0



    private x:number = 30; 
   

    protected ground:HTMLElement;
    protected space:HTMLElement

    constructor() {  
        this.ground = document.createElement("ground")
        document.body.appendChild(this.ground)

        this.space = document.createElement("space")
        document.body.appendChild(this.space)


        this.update();

    }

    loop() {  
        this.x--; 
        this.ground.style.backgroundPosition = this.x + `px 0px`;
        this.space.style.backgroundPosition = this.x + `px 0px`;
        requestAnimationFrame(()=> this.update())

            }

     public update() {  
        this.loop();
    }

    
}