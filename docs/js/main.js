"use strict";
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
        this.score = 0;
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "Score: 0 " + "of 120";
        console.log("Hallo");
        this.obstacle = [];
        for (var i = 0; i < Math.random(); i++) {
            var a = new Obstacle();
            this.obstacle.push(a);
        }
        this.thanos = new Thanos();
        this.background = new background();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.thanos.update();
        this.background.update();
        for (var _i = 0, _a = this.obstacle; _i < _a.length; _i++) {
            var e = _a[_i];
            var hit = this.checkCollision(this.thanos.getRectangle(), e.getRectangle());
            if (hit) {
                this.score += 25;
                this.scoreElement.innerHTML = "Score: " + this.score;
            }
            if (this.score == 100) {
                console.log("ik ben dood!");
            }
            e.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Obstacle = (function () {
    function Obstacle() {
        this.xspeed = 0;
        this.element = document.createElement("obstacle");
        document.body.appendChild(this.element);
        this.x = this.randomNumber(0, window.innerWidth - 130);
        this.y = 300;
        this.xspeed = Math.floor(Math.random() * Math.floor(15));
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
        this.x = this.x = this.element.getBoundingClientRect().width * -1;
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
        this.htmlElement = document.createElement("thanos");
        document.body.appendChild(this.htmlElement);
        this.frame = 0;
        this.y = 450;
        this.x = 450;
        this.leftkey = 68;
        this.rightkey = 65;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        this.update();
    }
    Thanos.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.rightkey:
                this.leftSpeed = 0;
                break;
            case this.leftkey:
                this.rightSpeed = 0;
                break;
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
        }
    };
    Thanos.prototype.update = function () {
        var _this = this;
        if (this.speedcounter % 1 == 0)
            this.frame++;
        if (this.frame >= this.frames)
            this.frame = 0;
        var pos = 0 - (this.frame * this.frameWidth);
        this.htmlElement.style.backgroundPosition = pos + 'px -555px';
        if (onkeyup) {
            this.frame = 0;
        }
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        requestAnimationFrame(function () { return _this.update(); });
    };
    Thanos.prototype.getRectangle = function () {
        return this.htmlElement.getBoundingClientRect();
    };
    return Thanos;
}());
//# sourceMappingURL=main.js.map