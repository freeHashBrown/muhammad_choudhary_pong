export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
    }

    //Helper function to get x values
    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
    }
    set x(value) {
        this.ballElem.style.setProperty("--x", value);
    }

    //Helper function to get y values
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
    }
    set y(value) {
        this.ballElem.style.setProperty("--y", value);
    }

    //Update function that will be passed delta
    update(delta) {
        this.x = 5;
        this.y = 15;
    }
}