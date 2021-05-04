
/* PUBLIC FUNCTIONS */

let level1 = [
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [],
]


let level2 = [
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
]

let level3 = [
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0]
]


function buildLevel(game, level) {

    let tiles = [];

    level.forEach((row, rowIndex) => {
        row.forEach((tile, tileIndex) => {
            if (tile === 1) {

                let position = {
                    x: 80 * tileIndex,
                    y: 50 + 24 * rowIndex
                };

                tiles.push(new Tile(game, position));
            }
        })
    })

    return tiles;

}

const GAMESTATE = {
    RUNNING: 0,
    MENU: 1,
    OVER: 2,
    NEWLEVEL: 3
}

function detectCollision(ball, gameObject) {
    // If collision with paddle
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;


    if (
        bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.size <= rightSideOfObject
    ) {

        return true;

    } else {

        return false;

    }
}

/* CLASSES */

class InputHandler {

    constructor(paddle) {
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 37:
                    paddle.moveLeft();
                    break;

                case 39:
                    paddle.moveRight();
                    break;
            }
        })

        document.addEventListener('keyup', e => {
            switch (e.keyCode) {
                case 37:
                    if (paddle.speed < 0) paddle.stop();
                    break;
                case 39:
                    if (paddle.speed > 0) paddle.stop();
                    break;
                case 32:
                    game.start();
                    break;
            }
        })

    }

}

class Paddle {
    constructor(game) {

        this.gameWidth = game.gameWidth;

        this.width = 150;
        this.height = 30;

        this.position = {

            x: game.gameWidth / 2 - this.width / 2,

            y: game.gameHeight - this.height - 10,

        }


        this.maxSpeed = 8
        this.speed = 0;
    }

    draw(ctx) {

        ctx.fillStyle = 'snow';

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    update(dt) {
        this.position.x += this.speed;

        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;

    }

}

class Ball {
    constructor(game) {
        this.image = document.getElementById("ball")

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = { x: 10, y: 400 };
        this.speed = { x: 3 * (game.currentLevel + 1), y: -3 * (game.currentLevel + 1) };
        this.size = 30;
    }

    reset() {
        this.position = { x: 10, y: 400 };
        this.speed = { x: 3 * (game.currentLevel + 1), y: -3 * (game.currentLevel + 1) };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(dt) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // If hits wall horizontally
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        // If hits top wall
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        // If hits bottom 
        if (this.position.y + this.size > this.gameHeight) {
            this.game.gamestate = GAMESTATE.OVER;
        }

        // If collision with paddle
        if (detectCollision(this, this.game.paddle)) {

            this.speed.y = -this.speed.y;

            this.position.y = this.game.paddle.position.y - this.size;

        }
    }
}

class Tile {
    constructor(game, position) {
        this.image = document.getElementById("tile")


        this.game = game;

        this.position = position;

        this.width = 80;
        this.height = 24;

        this.markedForDeletion = false;
    }

    update() {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;

            this.markedForDeletion = true;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameObjects = [];
        this.tiles = [];
        this.gamestate = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle);

        this.levels = [level1, level2, level3];

        this.currentLevel = 0;
    }

    start() {

        if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL && this.gamestate !== GAMESTATE.OVER) return;

        this.tiles = buildLevel(this, this.levels[this.currentLevel]);

        this.ball.reset();

        this.gameObjects = [this.ball, this.paddle];

        this.gamestate = GAMESTATE.RUNNING;
    }

    update(dt) {

        if (this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) return;

        if(this.tiles.length === 0) {
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        }

        [...this.gameObjects, ...this.tiles].forEach((object) => object.update(dt));

        this.tiles = this.tiles.filter(object => !object.markedForDeletion);
    }

    draw(ctx) {
        
        [...this.gameObjects, ...this.tiles].forEach((object) => object.draw(ctx));

        if (this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.7)";
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Välipeli", this.gameWidth / 2, this.gameHeight / 2);
            ctx.font = "20px Arial";
            ctx.fillText("Paina välilyöntiä aloittaaksesi", this.gameWidth / 2, this.gameHeight / 2 + 35);
        }


        if (this.gamestate === GAMESTATE.OVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.7)";
            ctx.fill();

            ctx.fillStyle = "red";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Hävisit pelin!", this.gameWidth / 2, this.gameHeight / 2);
            ctx.font = "20px Arial";
            ctx.fillText("Paina välilyöntiä aloittaaksesi uudelleen", this.gameWidth / 2, this.gameHeight / 2 + 35);
        }
    }

    togglePause() {
        if (this.gamestate == GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}



let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");


const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;


function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(dt);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}


requestAnimationFrame(gameLoop);