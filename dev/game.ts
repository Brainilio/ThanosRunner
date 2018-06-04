class Game {  

    screen:any


    constructor() {  
        this.screen = new Startscreen(this)
        this.gameLoop()
    }

    gameLoop() { 
        this.screen.update() 
        requestAnimationFrame(()=>this.gameLoop())

    }

    emptyScreen() {  
        
        document.body.innerHTML = ""
    }

    showPlayScreen(screen: Playscreen) { 
        this.screen = screen
        this.screen.update(); 

    }

    showGameOver(screen:GameOver) {  
        this.screen = screen
        this.screen.update(); 
    }

    showStartScreen(screen: Startscreen) {  
        this.screen = screen 
        this.screen.update(); 
    }

}