class Star extends gameObject {   
    private speedX:number
    private speedY:number 
    
        constructor() {  
        super("star", Math.floor(Math.random() * (window.innerWidth - 0 + 1) ) + 0, Math.random() * (window.innerHeight - 100))
        
        this.speedX = Math.floor(Math.random() * Math.floor(-15));
        this.speedY = Math.random() * 6 - 3 
        

                    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
               
    }

    public update() : void {
        this.x += this.speedX
        this.y += this.speedY
       

      
        if (this.x > window.innerWidth) {
           this.startLeft();
        } 

        if (this.y > window.innerHeight) {
            this.startLeft();
         } 
                    
                        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 


                            }

     private startLeft() {
             // plaats hem op min de breedte van de car zodat hij het scherm weer inrijdt
             // op random y positie
             this.x = this.x = this.div.getBoundingClientRect().width * 1;
             this.y = (100 + Math.random() * (window.innerHeight - 100 - this.div.getBoundingClientRect().height));
    
            }

            
}

