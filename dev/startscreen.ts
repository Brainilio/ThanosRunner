class Startscreen {  
    
    private element: HTMLElement
    private game: Game
  
    

    constructor(g:Game) {  
        this.game = g 
      
       
        let background = document.getElementsByTagName("background")[0];

        this.element = document.createElement("START")
        background.appendChild(this.element)
        this.element.addEventListener("click", ()=>this.clicked())
        this.element.innerHTML = "HELP THANOS GET THE INFINITY STONES"


        let logo = document.createElement("icon") 
        background.appendChild(logo)
        
      


       

    }

   

    public update() { 

    }
    private clicked() {  
        this.game.emptyScreen();
        this.game.showPlayScreen(new Playscreen(this.game))
        
    }

}