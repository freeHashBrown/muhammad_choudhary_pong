//importing the Ball class
import Ball from "./Ball.js";

//import the Paddle class
import Paddle from "./Paddle.js";

//Passing the ball element with the id called ball
const ball = new Ball(document.getElementById("ball"));

//Get player paddle and computer paddle
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

//Get player and computer score
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

//Get message element
const message = document.getElementById("message");


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

        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);

        //Using the update function for the computer paddle
        computerPaddle.update(delta, ball.y)

        if (isLose()) {
            handleLose();
        }

    }


    //For each render, set the lastTime to current time
    lastTime = time;

    window.requestAnimationFrame(update)
}

//Determining if the player missed the ball
function isLose() {
    const rect = ball.rect();
    return (rect.right >= window.innerWidth || rect.left <= 0) 
}

function handleLose() {

    const rect = ball.rect();
    //Check if the AI or player has missed the ball
    if (rect.right >= window.innerWidth) {

        playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1;

        //Check if the player has won
        if (parseInt(playerScoreElement.textContent) > 19) {
            //Display message of player winning
            message.textContent = "Player Wins";
    
            //Reset all scores
            playerScoreElement.textContent = 0;
            computerScoreElement.textContent = 0;
        }
        else {
            //Display message of player scoring
            message.textContent = "Player Scored";
        }
    } else {
        computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;

        //Check if AI has won
        if (parseInt(computerScoreElement.textContent) > 19) {

            //Display message of player winning
            message.textContent = "Computer Won";

           //Reset all scores
           playerScoreElement.textContent = 0;
           computerScoreElement.textContent = 0;        
    }
    else {
        //Display message of computer scoring
        message.textContent = "AI Scored";
        } 
    }


   ball.reset();
   computerPaddle.reset(); 
}

//event lister to move the player paddle using the mouse
document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})


//Call that update function using the request animation frame 
window.requestAnimationFrame(update)