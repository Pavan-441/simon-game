let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

const buttonColors = ["green", "red", "yellow", "blue"];

document.addEventListener("keypress", startGame);
document.querySelectorAll(".color-box").forEach((btn) => {
    btn.addEventListener("click", handleClick);
});

function startGame() {
    if (!started) {
        started = true;
        level = 0;
        gamePattern = [];
        nextSequence();
    }
}

function handleClick() {
    const userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
}

function nextSequence() {
    level++;
    userClickedPattern = [];
    document.getElementById("level-title").textContent = `Level ${level}`;

    const randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);

    setTimeout(() => animatePress(randomChosenColor), 500);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        playSound("wrong");
        document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
        started = false;
    }
}

function playSound(color) {
    const audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

function animatePress(color) {
    const element = document.getElementById(color);
    element.classList.add("pressed");
    setTimeout(() => element.classList.remove("pressed"), 200);
}
