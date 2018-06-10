"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SpriteAnimation = (function () {
    function SpriteAnimation() {
        this.frames = 10;
        this.frame = 0;
        this.frameWidth = 102;
        this.speedcounter = 0;
    }
    SpriteAnimation.prototype.update = function () { };
    return SpriteAnimation;
}());
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject(el, x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.div = document.createElement(el);
        document.body.appendChild(_this.div);
        return _this;
    }
    GameObject.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    };
    GameObject.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 3)) + min;
        return a;
    };
    GameObject.prototype.Spritemove = function (b) {
        this.speedcounter++;
        var framerate = 8;
        if (this.speedcounter % framerate == 0) {
            this.frame++;
        }
        if (this.frame >= this.frames)
            this.frame = 1;
        var pos = 0 - this.frame * this.frameWidth;
        this.div.style.backgroundPosition = pos + ("px " + b + "px");
    };
    GameObject.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    GameObject.prototype.dead = function () {
        this.div.remove();
    };
    return GameObject;
}(SpriteAnimation));
var Planet = (function (_super) {
    __extends(Planet, _super);
    function Planet() {
        var _this = _super.call(this, "planet", 50, Math.floor(Math.random() * 450) + 1) || this;
        _this.xspeed = 0;
        _this.xspeed = -10;
        _this.startRight();
        _this.color = _this.randomNumber(0, 500);
        _this.div.style.webkitFilter = "hue-rotate(" + _this.color + "deg)";
        _this.div.style.filter = "hue-rotate(" + _this.color + "deg)";
        return _this;
    }
    Planet.prototype.update = function () {
        this.x += this.xspeed;
        if (this.x > window.innerWidth) {
            this.startRight();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Planet.prototype.startRight = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * 18;
    };
    return Planet;
}(GameObject));
var Spaceship = (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship() {
        var _this = _super.call(this, "spaceship", 50, Math.floor(Math.random() * 450) + 1) || this;
        _this.xspeed = 0;
        _this.xspeed = -10;
        _this.startRight();
        return _this;
    }
    Spaceship.prototype.update = function () {
        this.x += this.xspeed;
        if (this.x > window.innerWidth) {
            this.startRight();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Spaceship.prototype.startRight = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * 18;
    };
    return Spaceship;
}(GameObject));
var infiniteLoop = (function () {
    function infiniteLoop(el, x, y) {
        this.xSpeed = 4;
        this.x = x;
        this.y = y;
        this.div = document.createElement(el);
        document.body.appendChild(this.div);
    }
    infiniteLoop.prototype.update = function () {
        this.Loop();
    };
    infiniteLoop.prototype.Loop = function () {
        this.x -= this.xSpeed;
        this.div.style.top = "translate(" + this.y + "px)";
        this.div.style.backgroundPosition = this.x + "px 500px";
    };
    infiniteLoop.prototype.changeSpeed = function (g) {
        this.xSpeed = g;
    };
    return infiniteLoop;
}());
var background = (function () {
    function background() {
        this.ground = new Ground();
        this.space = new Space();
    }
    background.prototype.update = function () {
        this.ground.update();
        this.space.update();
    };
    return background;
}());
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        return _super.call(this, "ground", 30, innerHeight) || this;
    }
    Ground.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    return Ground;
}(infiniteLoop));
var Space = (function (_super) {
    __extends(Space, _super);
    function Space() {
        return _super.call(this, "space", 30, innerHeight) || this;
    }
    Space.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    return Space;
}(infiniteLoop));
var Stones = (function (_super) {
    __extends(Stones, _super);
    function Stones() {
        var _this = _super.call(this, "infinitystones", Math.floor(Math.random() * (window.innerWidth + 10)), Math.floor(Math.random() * 450) + 1) || this;
        _this.speedX = 0;
        _this.speedX = -10;
        _this.startRightStones();
        _this.color = _this.randomNumber(0, 500);
        _this.div.style.webkitFilter = "hue-rotate(" + _this.color + "deg)";
        _this.div.style.filter = "hue-rotate(" + _this.color + "deg)";
        return _this;
    }
    Stones.prototype.update = function () {
        this.x += this.speedX;
        if (this.x > window.innerWidth) {
            this.startRightStones();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Stones.prototype.startRightStones = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * 18;
    };
    return Stones;
}(GameObject));
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle() {
        var _this = _super.call(this, "obstacle", 50, 450) || this;
        _this.xspeed = 0;
        _this.xspeed = Math.floor(Math.random() * Math.floor(15));
        _this.frame = 0;
        _this.startRight();
        return _this;
    }
    Obstacle.prototype.update = function () {
        this.x += this.xspeed;
        this.Spritemove(-555);
        if (this.x > window.innerWidth) {
            this.dead();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Obstacle.prototype.startRight = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * -2;
    };
    return Obstacle;
}(GameObject));
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = _super.call(this, "star", Math.random() * window.innerWidth, 0) || this;
        _this.speedX = -3 - Math.random() * 6;
        _this.speedY = Math.random() * 8;
        return _this;
    }
    Star.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.getRectangle().height > window.innerHeight ||
            this.y > 600) {
            this.startLeft();
            this.dead();
        }
        if (this.x > window.innerWidth) {
            this.startLeft();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Star.prototype.startLeft = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * -1;
        this.y =
            100 +
                Math.random() *
                    (window.innerHeight - 100 - this.div.getBoundingClientRect().height);
    };
    return Star;
}(GameObject));
var Stormbreaker = (function (_super) {
    __extends(Stormbreaker, _super);
    function Stormbreaker() {
        var _this = _super.call(this, "stormbreaker", Math.floor(Math.random() * (window.innerWidth + 3)), Math.floor(Math.random() * 450) + 1) || this;
        _this.speedX = 0;
        _this.speedX = -10;
        _this.startLeft();
        return _this;
    }
    Stormbreaker.prototype.update = function () {
        this.x += this.speedX;
        if (this.x > window.innerWidth) {
            this.startLeft();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Stormbreaker.prototype.startLeft = function () {
        this.x = this.x = 1920;
    };
    return Stormbreaker;
}(GameObject));
var Thanos = (function (_super) {
    __extends(Thanos, _super);
    function Thanos() {
        var _this = _super.call(this, "thanos", 450, 450) || this;
        _this.speed = 0;
        _this.leftSpeed = 0;
        _this.rightSpeed = 0;
        _this.upSpeed = 0;
        _this.frame = 0;
        _this.leftkey = 68;
        _this.rightkey = 65;
        _this.upkey = 32;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        _this.update();
        return _this;
    }
    Thanos.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.rightkey:
                this.leftSpeed = 5;
                break;
            case this.leftkey:
                this.rightSpeed = 5;
                break;
            case this.upkey:
                this.upSpeed = 5;
        }
    };
    Thanos.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.rightkey:
                this.leftSpeed = 0;
                break;
            case this.leftkey:
                this.rightSpeed = 0;
                break;
            case this.upkey:
                this.upSpeed = -5;
        }
    };
    Thanos.prototype.update = function () {
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
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    return Thanos;
}(GameObject));
var Game = (function () {
    function Game() {
        this.screen = new Startscreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.emptyScreen = function () {
        document.body.innerHTML = "";
    };
    Game.prototype.showPlayScreen = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showGameOver = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showStartScreen = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    Game.prototype.showGameWon = function (screen) {
        this.screen = screen;
        this.screen.update();
    };
    return Game;
}());
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.game = g;
        var x = document.createElement("img");
        x.setAttribute("class", "thanosloses");
        x.setAttribute("src", "img/thanos-walkf.gif");
        document.body.appendChild(x);
        this.element = document.createElement("START");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clicked(); });
        this.element.innerHTML = "GAME OVER, TRY AGAIN";
    }
    GameOver.prototype.update = function () { };
    GameOver.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showStartScreen(new Startscreen(this.game));
    };
    return GameOver;
}());
var GameWon = (function () {
    function GameWon(g) {
        var _this = this;
        this.game = g;
        var x = document.createElement("img");
        x.setAttribute("class", "thanoswin");
        x.setAttribute("src", "img/Thanos-wins.gif");
        document.body.appendChild(x);
        var h = document.createElement("START");
        h.addEventListener("click", function () { return _this.clicked(); });
        h.innerHTML = "You WON! Want to go at it again?";
        document.body.appendChild(h);
    }
    GameWon.prototype.update = function () { };
    GameWon.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showStartScreen(new Startscreen(this.game));
    };
    return GameWon;
}());
var Playscreen = (function () {
    function Playscreen(g) {
        this.life = 20;
        this.stone = 0;
        this.infinitystones = [];
        this.stars = [];
        this.obstacle = [];
        this.SpaceShip = [];
        this.Planets = [];
        this.breaker = [];
        this.starchance = 0.0025;
        this.obstaclechance = 0.0025;
        this.infinitychance = 0.0003;
        this.spaceShipchance = 0.0002;
        this.planetChance = 0.0003;
        this.breakerChance = 0;
        this.game = g;
        this.lifeElement = document.createElement("life");
        document.body.appendChild(this.lifeElement);
        this.lifeElement.innerHTML = "Lives:  " + this.life;
        this.stoneElement = document.createElement("stonescore");
        document.body.appendChild(this.stoneElement);
        this.stoneElement.innerHTML = "Stones collected: 0 out of 6";
        this.thanos = new Thanos();
        this.background = new background();
    }
    Playscreen.prototype.update = function () {
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
        for (var _i = 0, _a = this.stars; _i < _a.length; _i++) {
            var b = _a[_i];
            var hit = this.checkCollision(this.thanos.getRectangle(), b.getRectangle());
            if (hit) {
                this.life -= 2;
                this.lifeElement.innerHTML = "Lives:  " + this.life;
                b.dead();
            }
            b.update();
        }
        for (var _b = 0, _c = this.obstacle; _b < _c.length; _b++) {
            var e = _c[_b];
            if (this.checkCollision(this.thanos.getRectangle(), e.getRectangle())) {
                this.life -= 1;
                this.lifeElement.innerHTML = "Lives: " + this.life;
                e.dead();
            }
            e.update();
        }
        for (var _d = 0, _e = this.breaker; _d < _e.length; _d++) {
            var k = _e[_d];
            if (this.checkCollision(this.thanos.getRectangle(), k.getRectangle())) {
                this.life -= 5;
                this.lifeElement.innerHTML = "Lives: " + this.life;
                k.dead();
            }
            k.update();
        }
        if (this.life == 0) {
            this.game.emptyScreen();
            this.game.showGameOver(new GameOver(this.game));
        }
        for (var _f = 0, _g = this.infinitystones; _f < _g.length; _f++) {
            var g = _g[_f];
            if (this.checkCollision(this.thanos.getRectangle(), g.getRectangle())) {
                this.stone += 1;
                this.infinitychance += 0.005;
                this.obstaclechance += 0.005;
                this.breakerChance += 0.001;
                this.stoneElement.innerHTML =
                    "Stones collected: " + this.stone + " out of 6.";
                g.dead();
            }
            g.update();
        }
        if (this.stone == 6) {
            this.game.emptyScreen();
            this.game.showGameWon(new GameWon(this.game));
        }
        for (var _h = 0, _j = this.SpaceShip; _h < _j.length; _h++) {
            var h = _j[_h];
            h.update();
        }
        for (var _k = 0, _l = this.Planets; _k < _l.length; _k++) {
            var i = _l[_k];
            i.update();
        }
        this.thanos.update();
        this.background.update();
    };
    Playscreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Playscreen;
}());
window.addEventListener("load", function () { return new Game(); });
var Startscreen = (function () {
    function Startscreen(g) {
        var _this = this;
        this.game = g;
        var x = document.createElement("IMG");
        x.setAttribute("src", "img/thanos1.png");
        document.body.appendChild(x);
        var y = document.createElement("P");
        y.setAttribute("class", "textbegin");
        y.innerHTML =
            "Sup. 43/m/Titan. Not tryna catch feelings, just stones. Let's chill.";
        document.body.appendChild(y);
        this.element = document.createElement("START");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clicked(); });
        this.element.innerHTML = "HELP THANOS GET THE INFINITY STONES";
    }
    Startscreen.prototype.update = function () { };
    Startscreen.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new Playscreen(this.game));
    };
    return Startscreen;
}());
//# sourceMappingURL=main.js.map