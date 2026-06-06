const guessInput =
document.getElementById("guessInput");

const guessBtn =
document.getElementById("guessBtn");

const restartBtn =
document.getElementById("restartBtn");

const message =
document.getElementById("message");

const attemptsDisplay =
document.getElementById("attempts");

let randomNumber =
Math.floor(Math.random()*100)+1;

let attempts = 0;

function checkGuess(){

    const guess =
    Number(guessInput.value);

    if(
        guess < 1 ||
        guess > 100 ||
        isNaN(guess)
    ){
        message.textContent =
        "⚠ Enter a number between 1 and 100";
        return;
    }

    attempts++;

    attemptsDisplay.textContent =
    attempts;

    if(guess === randomNumber){

        message.textContent =
        `🎉 Correct! Number was ${randomNumber}`;

        document
        .querySelector(".game-card")
        .classList.add("correct");

        guessBtn.disabled = true;

    }

    else if(guess > randomNumber){

        message.textContent =
        "📈 Too High";

        triggerShake();
    }

    else{

        message.textContent =
        "📉 Too Low";

        triggerShake();
    }

    guessInput.value = "";
}

function triggerShake(){

    const card =
    document.querySelector(".game-card");

    card.classList.add("shake");

    setTimeout(()=>{
        card.classList.remove("shake");
    },400);
}

function restartGame(){

    randomNumber =
    Math.floor(Math.random()*100)+1;

    attempts = 0;

    attemptsDisplay.textContent =
    "0";

    message.textContent =
    "Start guessing...";

    guessBtn.disabled = false;

    document
    .querySelector(".game-card")
    .classList.remove("correct");

    guessInput.value = "";
}

guessBtn.addEventListener(
"click",
checkGuess
);

guessInput.addEventListener(
"keypress",
e=>{
    if(e.key==="Enter"){
        checkGuess();
    }
});

restartBtn.addEventListener(
"click",
restartGame
);