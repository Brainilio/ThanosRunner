# ThanosRunner
Game for PRG-01-4

***Thanos Runner***

https://brainilio.github.io/ThanosRunner/


***Gameplay***

- Je speelt als een character die Thanos moet voorstellen.
- Je kan bewegen in het spel: door A = naar rechts lopen, D =
naar links toe lopen en spatie is omhoog springen. 
- Als je een Hulk of een vuurbal aanraakt dan gaan je levens eraf
bij de hulk gaat er 1 leven af, bij een vuurbal 2 levens 
- Zodra je een infinity stone pakt dan activeer je de stormbreaker
- Als de stormbreaker je aanraakt dan gaan er 5 levens af. 
- De stormbreaker, vuurbal & hulk kansen worden hoger, hoe meer
infinity stones je pakt
- Als je 6 infinity stones hebt, dan heb je gewonnen
- Als je 0 levens hebt, dan ben je dood en eindigt het spel 

Muziek: 
- Je kan later dan het startscherm je muziek niet op pauze zetten dus heb ik een return knop toegevoegd. 
- Je progress zal wel verloren zijn, maar je kan zo wel je muziek op pauze zetten als je op de return knop klikt. 


***Installatie***

1. Download het Github project
2. Extract zip file. 
3. ThanosRunner/docs/index.html 


***Checklist***

Het game heeft een startscherm en een eindscherm, completed
Er zijn geen bugs, naar mijn ervaring niet, nee. 

***Toelichting OOP principes*** 

Path:  Alles zit in `dev/..`

- *Encapsulation*

Encapsulation zijn properties en functies die jij op protected, private of
public zet. Je zet ze op private als jij niet wilt dat een ander bestand
je variabele kan aanpassen, dus zet je het liefst alles op private. 

Je zet iets op public wanneer je iets wilt aanpassen van buiten

Protected gebruik je als je alleen wilt dat je children ( een child kan een parent inheriten, dat houdt in 
dat je dezelfde properties als die van je parent kan gebruiken ) het kunnen aanpassen, maar de rest niet. 

Encapsulation is door al mijn dev bestanden verwerkt. 

Voorbeelden:
`dev/gamescreen/playscreen`
..


```
class Playscreen {
 private thanos: Thanos;
 private background: background;
 private lifeElement: HTMLElement;
 private stoneElement: HTMLElement;
 private life: number = 20;
 private stone: number = 0;
 
 private game: Game;
 private infinitystones: Stones[] = [];
 private stars: Star[] = [];
 private obstacle: Obstacle[] = [];
 
 private SpaceShip: Spaceship[] = [];
 private Planets: Planet[] = [];
 private breaker: Stormbreaker[] = [];
 
 private starchance: number = 0.0040;
 private obstaclechance: number = 0.0035;
 private infinitychance: number = 0.0008;
 private spaceShipchance: number = 0.0002;
 private planetChance: number = 0.0003;
 private breakerChance: number = 0;


 constructor(g: Game) {
    this.game = g;

   let y = document.getElementsByTagName("foreground")[0];

   this.lifeElement = document.createElement("life");
   y.appendChild(this.lifeElement);
   this.lifeElement.innerHTML = "Lives:  " + this.life;

   this.stoneElement = document.createElement("stonescore");
   y.appendChild(this.stoneElement);
   this.stoneElement.innerHTML = "Stones collected: 0 out of 6";

   this.thanos = new Thanos();
   this.background = new background(); }` 
 ```


`dev/gameobjects/animation.ts/`

..
```
 class SpriteAnimation {
  protected frames = 10;
  protected frame = 0;
  protected frameWidth = 102;
  protected speedcounter = 0;

  constructor() {}

  public update() {}
}
```
- *Classes*

Ik heb classes uitgevoerd in: 
`dev/gameobjects/gameobject.ts` zoals je ziet als je eeen gameobject wilt extenden moet je in de super eerst een paar parameters doorgeven, dat is in dit geval de `el, x & y` - Deze roep ik dan terug in `dev/ambienteffects`
Als je in `dev/gameobjects/gameObject.ts` kijkt zie je ook dat ik een aantal functies heb zoals `randomnumber, spritemove, dead & getrectangle` die door mijn bestanden heen worden gebruikt. 
in `dev/gamescreen/game.ts` maak ik ook classes aan die in andere screens opgeroepen wordt. 

Voorbeelden: 

`dev/gamescreen/startscreen.ts`

```
class Startscreen {
  private game: Game;

  constructor(g: Game) {
this.game = g;

private clicked() {
    this.game.emptyScreen();
    this.game.showPlayScreen(new Playscreen(this.game));
}
```

- *Composition*

`dev/background/..`
Er wordt gebruik gemaakt van Composition in `background/background.ts`, daar roep ik mijn `ground.ts & space.ts` objecten op zodat ik ze beide kan updaten. Dit is handiger zodat ik alleen background hoef op te roepen in `playscreen.ts`

`dev/gamescreen/..`
Verder roep ik screens op in
 `game.ts`, ik roep daar mijn `startscreen, playscreen, gameover, startscreen & gamewon screen` op, dit zijn ook allemaal aparte objecten die ik hier oproep en ik roep de update functies van hen ervan. 
in `GameOver` roep ik mijn game aan zodat ik vanuit hier weer terug kan gaan naar de game en een functie vanuit daar weer kan oproepen. 
In `Gamewon` roep ik mijn game ook op voor dezelfde reden.
in `startscreen` ook weer voor dezelfe reden als gameover

In mijn `playscreen` roep ik mijn `gameobjects` op en mijn `background` op zodat ik ze uiteindelijk kan gebruiken. 
Dit is handiger zodat je netter in aparte bestanden kan werken en niet alles in 1 bestand hoeft te doen en heen en weer hoeft te roepen. Dit is veel handiger en elke bestand is zo unieker en netter. 

voorbeelden: 
`dev/gamescreen/playscreen`
..

```
class Playscreen {
  private thanos: Thanos;
  private background: background;
  private infinitystones: Stones[] = [];
  private stars: Star[] = [];
  private obstacle: Obstacle[] = [];
  private SpaceShip: Spaceship[] = [];
  private Planets: Planet[] = [];
private breaker: Stormbreaker[] = [];

 constructor(g: Game) {
    this.thanos = new Thanos();
    this.background = new background();
}

 public update() {
    if (Math.random() < this.infinitychance) {
      this.infinitystones.push(new Stones());
    }
    
   if (Math.random() < this.obstaclechance) {
     this.obstacle.push(new Obstacle());
   }

   if (Math.random() < this.starchance) {
    this.stars.push(new Star());
}

 if (Math.random() < this.breakerChance) {
      this.breaker.push(new Stormbreaker());
    }

   if (Math.random() < this.spaceShipchance) {
     this.SpaceShip.push(new Spaceship());
  }

   if (Math.random() < this.planetChance) {
     this.Planets.push(new Planet());
}
this.thanos.update();
this.background.update();
}
```


- *Inheritance* 

Inheritance is handig zodat je bepaalde regels codes niet hoeft te herhalen, ik wilde dit niet voor allemaal doen omdat het dan te lastig zou worden om te doen, 

`dev/gameobjects/..`


maar ik heb wel een GameObject ts bestand gemaakt en een SpriteAnimation. Ik maak gebruik van een Spriteanimation omdat meerdere bestanden dezelfde variabelen nodig hebben maar ik deze niet continu ga herhalen. 
`SpriteAnimation` heeft als kinderen: `GameObject` 

GameObject heeft een aantal functies die zijn kinderen kunnen gebruiken
`GameObject` kinderen: 
- Infinitystone.ts
- obstacle.ts
- star.ts
- stormbreaker.ts
- thanos.ts

Verder heeft gameobject ook kinderen in: 

`dev/ambienteffects/..` 
ambientplanet.ts
ambientstar.ts

Zoals je kan zien kunnen alle gameobject kinderen dezelfde functies oproepen die in gameobject verwerkt zijn. Dit is handiger zodat je geen code meer hoeft te herhalen 

`dev/background/..`
Omdat mijn background bestaat uit een space en ene ground is het een beetje stom om die beide aan te roepen in mijn `playscreen.ts` dus heb ik een `infiniteloop.ts` bestand gemaakt die `space & ground` als inheritance hebben. 
in `background.ts` maak ik dan weer gebruik van composition om de space & ground op te roepen en de update functies daaruit op te roepen zodat ik alleen `background.ts` hoef op te roepen in mijn `playscreen. `

voorbeelden: 
`dev/gameobjects/gameobject`
`dev/gameobjects/spriteanimation`
`dev/gameobjects/thanos`

```
class SpriteAnimation {
  protected frames = 10;
  protected frame = 0;
  protected frameWidth = 102;
  protected speedcounter = 0;

  constructor() {}

  public update() {}
}

class GameObject extends SpriteAnimation {
  protected x: number;
  protected y: number;
  protected div: HTMLElement;

  constructor(el: any, x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    let a = document.getElementsByTagName("foreground")[0];
    this.div = document.createElement(el);
    a.appendChild(this.div);
  }

  public update() {
    this.div.style.transform = translate(${this.x}px, ${this.y}px;
  }

  public randomNumber(min: number, max: number) {
    let a: number = Math.floor(Math.random() * (max - min + 3)) + min;
    return a;
  }

  public Spritemove(b: number) {
    this.speedcounter++;

   let framerate = 5;
   if (this.speedcounter % framerate == 0) {
      this.frame++;
    }
    if (this.frame >= this.frames) this.frame = 1;

   let pos = 0 - this.frame * this.frameWidth;
   this.div.style.backgroundPosition = pos + `px ${b}px`;
  }

  public getRectangle() {
    return this.div.getBoundingClientRect();
  }

  public dead() {
    this.div.remove();
  }
}

class Thanos extends GameObject {

  constructor() {
    super("thanos", 450, 450);

   this.update();
  }

  public update() {
    this.y = this.y - this.upSpeed;
    this.x = this.x - this.leftSpeed + this.rightSpeed;

   if (this.y > 450) {
     this.y = 450;
      this.upSpeed = 0;
    }

   if (this.y < 0) {
      this.upSpeed = -5;
    }

   if (this.x > 1850) {
     this.rightSpeed = -1;
   }

   if (this.x < 0) {
     this.x = 0;
    }

   console.log(this.x);

   this.Spritemove(-555);

   this.div.style.left =${this.x}px;
   this.div.style.top = ${this.y}px;
  }
}
```

***Klassendiagram***
![alt text](https://raw.githubusercontent.com/Brainilio/ThanosRunner/master/UMLklassendiagram.png)

Link naar draw.io: 
https://drive.google.com/file/d/1_1Mz5FX-5jd2kdDC1slfFt7MwiDw2Lth/view?usp=sharing

***Peer Review*** 
Dit is de link naar de peer review die is gedaan op mijn project: 
https://github.com/Brainilio/ThanosRunner/issues/1

En dit is de link naar de peer review die ik zelf heb uitgevoerd op Danielle's project: 
https://github.com/madameJeanette/fluffyGameWork/issues/2


***Uitdaging***
Ik heb de library HowlerJS gebruikt zodat ik muziek kan afspelen in mijn game. 
