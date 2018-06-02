class Playscreen 

{  
    
    private thanos:Thanos;
    private background:background;
    private scoreElement:HTMLElement;
    
    public score:number = 500; 
    private game: Game
    private stars:Star[]



    constructor(g:Game) {   
      
        this.stars = []

        this.game = g
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 500 " 

        console.log("Hallo");
        
        
           
            for(let i = 0; i<5; i++) {  
                this.stars.push(new Star())
            }

        
        this.thanos = new Thanos(); 
        this.background = new background();

       
    }



    public update() {
        
        
        for(let b of this.stars) {
            if (this.checkCollision(b.getRectangle(), this.thanos.getRectangle())) {
                
                this.score--
                this.scoreElement.innerHTML = "Score: " + this.score;

        }
        b.update();
        this.thanos.update();
        this.background.update();
    

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