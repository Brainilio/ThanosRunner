class Playscreen 

{  
    
    private thanos:Thanos;
    private background:background;
    private scoreElement:HTMLElement;
    private lifeElement:HTMLElement;

    
    
    public score:number = 50; 
    public life:number = 3; 
    private game: Game
    private stars:Star[] = []
    private level:number = 0.0001; 
    private tree:number = 0.1; 
    private obstacle:Obstacle[] = []
    



    constructor(g:Game) {   
        this.game = g

        this.lifeElement = document.createElement("life");
        document.body.appendChild(this.lifeElement);
        this.lifeElement.innerHTML = "Life: 3 "
        
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 500 " 

        console.log("Hallo");
        
        
        this.thanos = new Thanos(); 
        this.background = new background();

       
    }



    public update() {

       
        
            for(let b of this.stars) { 
                let hit = this.checkCollision(this.thanos.getRectangle(), b.getRectangle())

                 if(hit) { 
                     this.score-=1
                     this.scoreElement.innerHTML = "Score:  " + this.score
                     b.speedX += Math.random() * -3; 
                     b.speedY += Math.random() * -3; 
                     b.dead(); 
                     console.log("hoi!");

                    }
                    b.update();
                if(this.score == 0) {  
                    this.game.emptyScreen();
                    this.game.showGameOver(new GameOver(this.game))
                }}


                for(let e of this.obstacle) {           
                if(this.checkCollision(this.thanos.getRectangle(), e.getRectangle()))
                    {
                        this.life+=1
                        this.lifeElement.innerHTML = "Life: " + this.life
                        console.log("hi");
                        setTimeout(this.slow, 10000)
            
                    }
                    e.update();
                    if(this.life == 50) {  
                        this.game.emptyScreen(); 
                        this.game.showStartScreen(new Startscreen(this.game))
                    }

                }
        



                if (Math.random() < this.tree) {
                    this.obstacle.push(new Obstacle());
                }

                if (Math.random() < this.level) {
                    this.stars.push(new Star());
                }


                
    
            this.thanos.update();
            this.background.update();

    

      

    }
    public checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public slow() { 
        this.thanos.leftSpeed -= 5;
    }



}

window.addEventListener("load", () => new Game())