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
var background = (function () {
    function background() {
        this.speed = 0;
        this.x = 30;
        this.ground = document.createElement("ground");
        document.body.appendChild(this.ground);
        this.space = document.createElement("space");
        document.body.appendChild(this.space);
        this.update();
    }
    background.prototype.loop = function () {
        var _this = this;
        this.x--;
        this.ground.style.backgroundPosition = this.x + "px 0px";
        this.space.style.backgroundPosition = this.x + "px 0px";
        requestAnimationFrame(function () { return _this.update(); });
    };
    background.prototype.update = function () {
        this.loop();
    };
    return background;
}());
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
        var background = document.getElementsByTagName("background")[0];
        background.innerHTML = "";
        document.body.innerHTML = "";
    };
    Game.prototype.showPlayScreen = function (screen) {
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
var Obstacle = (function () {
    function Obstacle() {
        this.xspeed = 0;
        this.element = document.createElement("obstacle");
        document.body.appendChild(this.element);
        this.x = this.randomNumber(0, window.innerWidth);
        this.y = 300;
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
        this.x = this.x = this.element.getBoundingClientRect().width * 1;
    };
    Obstacle.prototype.randomNumber = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 1)) + min;
        return a;
    };
    Obstacle.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Obstacle;
}());
var Playscreen = (function () {
    function Playscreen(g) {
        this.score = 500;
        this.stars = [];
        this.game = g;
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 500 ";
        console.log("Hallo");
        for (var i = 0; i < 5; i++) {
            this.stars.push(new Star());
        }
        this.thanos = new Thanos();
        this.background = new background();
    }
    Playscreen.prototype.update = function () {
        for (var _i = 0, _a = this.stars; _i < _a.length; _i++) {
            var b = _a[_i];
            if (this.checkCollision(b.getRectangle(), this.thanos.getRectangle())) {
                this.score--;
                this.scoreElement.innerHTML = "Score: " + this.score;
            }
            b.update();
            this.thanos.update();
            this.background.update();
        }
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
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        var _this = _super.call(this, "star", Math.random() * (window.innerWidth + 50), Math.random() * (window.innerHeight - 100)) || this;
        _this.speedX = -5;
        _this.speedY = Math.random() * 6 - 3;
        return _this;
    }
    Star.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Star.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > window.innerWidth) {
            this.startLeft();
        }
        if (this.y > window.innerHeight) {
            this.startLeft();
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Star.prototype.startLeft = function () {
        this.x = this.x = this.div.getBoundingClientRect().width * 1;
        this.y = (100 + Math.random() * (window.innerHeight - 100 - this.div.getBoundingClientRect().height));
    };
    return Star;
}(gameObject));
var Startscreen = (function () {
    function Startscreen(g) {
        var _this = this;
        this.game = g;
        var background = document.getElementsByTagName("background")[0];
        this.element = document.createElement("START");
        background.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clicked(); });
        this.element.innerHTML = "HELP THANOS GET THE INFINITY STONES";
        var logo = document.createElement("icon");
        background.appendChild(logo);
    }
    Startscreen.prototype.update = function () {
    };
    Startscreen.prototype.clicked = function () {
        this.game.emptyScreen();
        this.game.showPlayScreen(new Playscreen(this.game));
    };
    return Startscreen;
}());
var Thanos = (function () {
    function Thanos() {
        var _this = this;
        this.speed = 0;
        this.frames = 10;
        this.frame = 0;
        this.frameWidth = 102;
        this.speedcounter = 0;
        this.x = 0;
        this.y = 0;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.upSpeed = 0;
        this.htmlElement = document.createElement("thanos");
        document.body.appendChild(this.htmlElement);
        this.frame = 0;
        this.y = 450;
        this.x = 450;
        this.leftkey = 68;
        this.rightkey = 65;
        this.upkey = 32;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        this.update();
    }
    Thanos.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.rightkey:
                this.leftSpeed = 5;
                console.log("ik klik iets");
                break;
            case this.leftkey:
                this.rightSpeed = 5;
                console.log("ik klik iets");
                break;
            case this.upkey:
                this.upSpeed = 3;
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
        this.htmlElement.style.backgroundPosition = pos + 'px -555px';
        if (onkeyup) {
            this.frame = 0;
        }
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
    };
    Thanos.prototype.getRectangle = function () {
        return this.htmlElement.getBoundingClientRect();
    };
    return Thanos;
}());
//# sourceMappingURL=main.js.map