class Game 

{  

    private thanos:Thanos;
    private background:background;
    private scoreElement:HTMLElement;
    private obstacle:Obstacle;

    
    constructor() {   
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 0" + "of 120"

        console.log("Hallo");
        this.obstacle = new Obstacle(); 
        this.thanos = new Thanos(); 
        this.background = new background();
        this.update()

    }

    public update() {  
        this.thanos.update();
        this.background.update();
        this.obstacle.update();

        for(let i = 0; i<30; i++) { 
            this.scoreElement.innerHTML = "Score: " + i + " of 120"; 
        }

        requestAnimationFrame( () => this.update())
        
    }

}

window.addEventListener("load", () => new Game())