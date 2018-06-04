
class background {   

    protected ground:Ground
    protected space:Space
    

    constructor() {  
       
       this.ground = new Ground()
       this.space = new Space() 
      
    }


     public update() {  
        this.ground.update() 
        this.space.update()

        
    }

    
}