class GameOver {  
    private element: HTMLElement
    private game: Game
  
    

    constructor(g:Game) {  
        this.game = g 
      
    

        this.element = document.createElement("START")
        document.body.appendChild(this.element)
        this.element.addEventListener("click", ()=>this.clicked())
        this.element.innerHTML = "GAME OVER, TRY AGAIN"


     
      


       

    }

   

    public update() { 

    }
    
    private clicked() {  
        this.game.emptyScreen();
        this.game.showStartScreen(new Startscreen(this.game))
        
    }

}