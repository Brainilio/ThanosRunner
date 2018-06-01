class Obstacle {  

    private x:number
    private y:number

    private xspeed:number = 0
    
    private element:HTMLElement

   constructor() {  
       this.element = document.createElement("obstacle") 
       document.body.appendChild(this.element)

       this.x = 0; 
       this.y = 450;
    
      
       
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

}