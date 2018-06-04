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
    return Game;
}());
var gameObject = (function () {
    function gameObject(el, x, y) {
        this.x = x;
        this.y = y;
        this.div = document.createElement(el);
        document.body.appendChild(this.div);
    }
    gameObject.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    };
    return gameObject;
}());
var GameOver = (function () {
    function GameOver(g) {
        var _this = this;
        this.game = g;
        this.element = document.createElement("START");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clicked(); });
        this.element.innerHTML = "GAME OVER, TRY AGAIN";
    }
    GameOver.prototype.update = function () {
    };
    GameOver.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showStartScreen(new Startscreen(this.game));
    };
    return GameOver;
}());
var Obstacle = (function () {
    function Obstacle() {
        this.xspeed = 0;
        this.element = document.createElement("obstacle");
        document.body.appendChild(this.element);
        this.x = this.randomNumber(0, window.innerWidth);
        this.y = 400;
        this.xspeed = Math.floor(Math.random() * Math.floor(-15));
        this.startRight();
    }
    Obstacle.prototype.update = function () {
        this.x += this.xspeed;
        if (this.x > window.innerWidth) {
            this.startRight();
        }
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    };
    Obstacle.prototype.startRight = function () {
        this.x = this.x = this.element.getBoundingClientRect().width * 2;
    };
    Obstacle.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 3)) + min;
        return a;
    };
    Obstacle.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Obstacle;
}());
var Playscreen = (function () {
    function Playscreen(g) {
        this.score = 50;
        this.life = 3;
        this.stars = [];
        this.level = 0.0001;
        this.tree = 0.1;
        this.obstacle = [];
        this.game = g;
        this.lifeElement = document.createElement("life");
        document.body.appendChild(this.lifeElement);
        this.lifeElement.innerHTML = "Life: 3 ";
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 500 ";
        console.log("Hallo");
        this.thanos = new Thanos();
        this.background = new background();
    }
    Playscreen.prototype.update = function () {
        for (var _i = 0, _a = this.stars; _i < _a.length; _i++) {
            var b = _a[_i];
            var hit = this.checkCollision(this.thanos.getRectangle(), b.getRectangle());
            if (hit) {
                this.score -= 1;
                this.scoreElement.innerHTML = "Score:  " + this.score;
                b.speedX += Math.random() * -3;
                b.speedY += Math.random() * -3;
                b.dead();
                console.log("hoi!");
            }
            b.update();
            if (this.score == 0) {
                this.game.emptyScreen();
                this.game.showGameOver(new GameOver(this.game));
            }
        }
        for (var _b = 0, _c = this.obstacle; _b < _c.length; _b++) {
            var e = _c[_b];
            if (this.checkCollision(this.thanos.getRectangle(), e.getRectangle())) {
                this.life += 1;
                this.lifeElement.innerHTML = "Life: " + this.life;
                console.log("hi");
                setTimeout(this.slow, 10000);
            }
            e.update();
            if (this.life == 50) {
                this.game.emptyScreen();
                this.game.showStartScreen(new Startscreen(this.game));
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
    };
    Playscreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Playscreen.prototype.slow = function () {
        this.thanos.leftSpeed -= 5;
    };
    return Playscreen;
}());
window.addEventListener("load", function () { return new Game(); });
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = _super.call(this, "star", Math.random() * window.innerWidth, Math.random() * window.innerHeight) || this;
        _this.speedX = -3 - (Math.random() * 6);
        _this.speedY = Math.random() * 8;
        return _this;
    }
    Star.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Star.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.getRectangle().height > window.innerHeight || this.y > 600) {
            this.startLeft();
            this.dead();
        }
        if (this.x > window.innerWidth) {
            this.startLeft();
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Star.prototype.dead = function () {
        this.div.classList.add("dead");
    };
    Star.prototype.startLeft = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * -1;
        this.y = (100 + Math.random() * (window.innerHeight - 100 - this.div.getBoundingClientRect().height));
    };
    return Star;
}(gameObject));
var Startscreen = (function () {
    function Startscreen(g) {
        var _this = this;
        this.game = g;
        this.element = document.createElement("START");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clicked(); });
        this.element.innerHTML = "HELP THANOS GET THE INFINITY STONES";
        var logo = document.createElement("icon");
        document.body.appendChild(logo);
    }
    Startscreen.prototype.update = function () {
    };
    Startscreen.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new Playscreen(this.game));
    };
    return Startscreen;
}());
var Thanos = (function (_super) {
    __extends(Thanos, _super);
    function Thanos() {
        var _this = _super.call(this, "thanos", 0, 0) || this;
        _this.speed = 0;
        _this.frames = 10;
        _this.frame = 0;
        _this.frameWidth = 102;
        _this.speedcounter = 0;
        _this.leftSpeed = 0;
        _this.rightSpeed = 0;
        _this.upSpeed = 0;
        _this.frame = 0;
        _this.y = 450;
        _this.x = 450;
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
                this.leftSpeed = 10;
                console.log("ik klik iets");
                break;
            case this.leftkey:
                this.rightSpeed = 10;
                console.log("ik klik iets");
                break;
            case this.upkey:
                this.upSpeed = 10;
                console.log("ik spring!");
        }
    };
    Thanos.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.rightkey:
                this.leftSpeed = 0;
                console.log("ik klik niks");
                break;
            case this.leftkey:
                this.rightSpeed = 0;
                console.log("ik klik niks");
                break;
            case this.upkey:
                this.upSpeed = -5;
                console.log("ik zak omlaag!");
        }
    };
    Thanos.prototype.update = function () {
        this.y = this.y - this.upSpeed;
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        if (this.y > 450) {
            this.y = 450;
            this.upSpeed = 0;
        }
        if (this.x > window.innerWidth) {
            this.rightSpeed = 0;
        }
        if (this.speedcounter % 100 == 0)
            this.frame++;
        if (this.frame >= this.frames)
            this.frame = 1;
        var pos = 0 - (this.frame * this.frameWidth);
        this.div.style.backgroundPosition = pos + 'px -555px';
        if (onkeyup) {
            this.frame = 0;
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    Thanos.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Thanos;
}(gameObject));
var infiniteLoop = (function () {
    function infiniteLoop(el, x, y) {
        this.xSpeed = 15;
        this.x = x;
        this.y = y;
        this.div = document.createElement(el);
        document.body.appendChild(this.div);
        console.log("hoi");
    }
    infiniteLoop.prototype.update = function () {
        this.Loop();
    };
    infiniteLoop.prototype.Loop = function () {
        this.x -= this.xSpeed;
        this.div.style.top = "translate(" + this.y + "px)";
        this.div.style.backgroundPosition = this.x + "px 0px";
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
//# sourceMappingURL=main.js.map