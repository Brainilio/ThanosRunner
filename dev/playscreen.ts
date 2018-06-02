class Playscreen 

{  
    
    private thanos:Thanos;
    private background:background;
    private scoreElement:HTMLElement;
    private obstacle: Obstacle[]
    public score:number = 0; 
    private game: Game



    constructor(g:Game) {   
        this.game = g
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 0 " + "of 120"

        console.log("Hallo");
        this.obstacle = []
        
            for(let i = 0; i<Math.random() * 20; i++) { 
            let a = new Obstacle(); 
            this.obstacle.push(a)
           
        
        }

        
        this.thanos = new Thanos(); 
        this.background = new background();

       
    }



    public update() {  
        this.thanos.update();
        this.background.update();

        for(let e of this.obstacle) { 
                let hit = this.checkCollision(this.thanos.getRectangle(), e.getRectangle())
                if(hit) {  
                    this.score += 25
                    this.scoreElement.innerHTML = "Score: " + this.score; 
                }
                if(this.score == 100) {  
                    console.log("ik ben dood!");
                }

                e.update();
        }   
    }

    public checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

}

window.addEventListener("load", () => new Game())