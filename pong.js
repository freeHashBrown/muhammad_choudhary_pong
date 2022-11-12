//importing the Ball class
import Ball from "./Ball.js";

//Passing the ball element with the id called ball
const ball = new Ball(document.getElementById("ball"));

//The game will be run by an update function that will be called to update each frame
//This function will take a time variable for how much time has passed
function update(time) {

    //

}

//Call that update function using the request animation frame 
window.requestAnimationFrame(update)