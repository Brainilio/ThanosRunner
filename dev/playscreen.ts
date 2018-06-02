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
        let background = document.getElementsByTagName("background")[0] 
        background.innerHTML = ""
        document.body.innerHTML = ""
    }

    showPlayScreen(screen: Playscreen) { 
        this.screen = screen
        this.screen.update(); 

    }

}