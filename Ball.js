//const initial velocity 
const INITIAL_VELOCITY = 0.025;
//const velocity increase
const VELOCITY_INCREASE = 0.00001;

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem;
        this.reset();
    }

    //Helper function to set and get x values
    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
    }
    set x(value) {
        this.ballElem.style.setProperty("--x", value);
    }

    //Helper function to set and get y values
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
    }
    set y(value) {
        this.ballElem.style.setProperty("--y", value);
    }

    rect() {
        return this.ballElem.getBoundingClientRect();
    }

    //Reset function
    reset() {
        this.x = 50;
        this.y = 50;

        this.direction = {x: 0};

        while (
            Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9
        ){
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = {
                x: Math.cos(heading), y: Math.sin(heading) 
            }
        }
        this.velocity = INITIAL_VELOCITY;
    }

    //Update function that will be passed delta
    update(delta, paddleRect) {
        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity * delta;

        //Increase the velocity of the ball as game progresses
        this.velocity += VELOCITY_INCREASE * delta;
        const rect = this.rect();

        if (rect.bottom > window.innerHeight || rect.top <= 0) {
            this.direction.y *= -1;
        }

        if (paddleRect.some(r => isCollision(r, rect))) {
            this.direction.x *= -1;
        }
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}

function isCollision(rect1, rect2) {
    return (rect1.left <= rect2.right && 
        rect1.right >= rect2.left && 
        rect1.top <= rect2.bottom && 
        rect1.bottom >= rect2.top)
}