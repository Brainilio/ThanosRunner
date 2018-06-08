class Startscreen {  
    
    private element: HTMLElement
    private game: Game

  
    

    constructor(g:Game) {  
        this.game = g 
      
       
       

        this.element = document.createElement("START")
        document.body.appendChild(this.element)
        this.element.addEventListener("click", ()=>this.clicked())
        this.element.innerHTML = "HELP THANOS GET THE INFINITY STONES"


        let logo = document.createElement("icon") 
        document.body.appendChild(logo)
        
      


       

    }

   

    public update() { 

    }
    
    private clicked() {  
        this.game.emptyScreen();
        this.game.showPlayScreen(new Playscreen(this.game))
        
    }

}