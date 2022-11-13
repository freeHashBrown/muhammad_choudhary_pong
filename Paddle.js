//Speed of the computer paddle
const SPEED = 0.02

//Class for paddle 
export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        this.reset()
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value);
    }

    //Returns the paddle, so they can be used in the Ball class
    rect() {
        return this.paddleElem.getBoundingClientRect()
    }

    reset() {
        this.position = 50;
    }

    update(delta, ballHeight) {
       this.position += SPEED * delta * (ballHeight - this.position);
    }
}

