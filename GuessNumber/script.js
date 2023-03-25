'use strict';

let message = document.querySelector('.message');
let score = document.querySelector('.label-score');
let highScore = document.querySelector('.label-highscore');

let check = document.querySelector('.check');

let randomNumber = Math.floor(Math.random() * 20) + 1;  //returns a random number between 1-20
let currentScore = 20;
let highScoreUpdate = 0;



check.addEventListener("click", function(){

    const guess = Number(document.querySelector(".guess").value);

    if(guess == ""){
        alert("Please guess a number between 1-20")
        message.textContent = " ⛔️ No number";}
    else if(guess === randomNumber){
        message.textContent = "🎉 Correct Number!!!";
        if(currentScore>highScoreUpdate){
                highScore.textContent = "🥇 Highscore: " + currentScore;
                highScoreUpdate = currentScore;
        }
        document.querySelector("body").style.backgroundColor = "#60b347";
     
        }
        else{
                if(currentScore > 1){
                        if(guess > randomNumber) {
                                message.textContent = "🔽 Too high!";
                                currentScore --;
                                score.textContent = "💯 Score:" + currentScore;
                                }
                        else{
                            message.textContent = "🔼 Too low!";
                            currentScore --;
                            score.textContent = "💯 Score: " + currentScore}
                }else{
                        if(guess > randomNumber) {
                                message.textContent = "💥 You Lost!";
                                currentScore --;
                                score.textContent = "💯 Score:" + currentScore;
                                }
                        else{
                            message.textContent = "💥 You Lost!";
                            currentScore --;
                            score.textContent = "💯 Score: " + currentScore}
                }
        }
})


let again = document.querySelector(".again");

again.addEventListener("click", function(){

        randomNumber = Math.floor(Math.random() * 20) + 1; 
        currentScore = 20;
        message.textContent = "Start Guessing..."
        score.textContent = "💯 Score: " + currentScore;
        document.querySelector(".guess").value = "";

        document.querySelector("body").style.backgroundColor = "rgb(43, 42, 42)";

})