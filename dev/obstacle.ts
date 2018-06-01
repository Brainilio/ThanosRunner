class Obstacle {  

    private x:number
    private y:number

    private xspeed:number = 0
    
    private element:HTMLElement

   constructor() {  
       this.element = document.createElement("obstacle") 
       document.body.appendChild(this.element)

       this.x = this.randomNumber(0, window.innerWidth-130); 
       this.y = 300;
    
       this.xspeed = Math.floor(Math.random() * Math.floor(15));

    
      
       
       this.startRight(); 
   }

   public update() {   
   

    this.x += this.xspeed;

    if(this.x > window.innerWidth) {  
       this.startRight();
    }

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`; 

   }

   private startRight() { 
       
    this.x = this.x = this.element.getBoundingClientRect().width * -1;
    
   }

   randomNumber(min:number, max:number) {
        let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
        return a

    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }



}