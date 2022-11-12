//importing the Ball class
import Ball from "./Ball.js";

//Passing the ball element with the id called ball
const ball = new Ball(document.getElementById("ball"));

//Create a variable called lastTime, by default it will be null
let lastTime;

//The game will be run by an update function that will be called to update each frame
//This function will take a time variable for how much time has passed
function update(time) {

    //Check for the first time if lastTime is null or not
    if (lastTime !=null) {
        //Convert time into delta, which is the time difference between the previous frame to the new frame
        const delta = time-lastTime;

        //Only updating code if lastTime is not null
        //Passing delta into update function in ball class
        ball.update(delta);

    }


    //For each render, set the lastTime to current time
    lastTime = time;

    window.requestAnimationFrame(update)
}

//Call that update function using the request animation frame 
window.requestAnimationFrame(update)