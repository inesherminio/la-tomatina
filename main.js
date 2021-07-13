let splashScreen = document.querySelector("#splash-screen");
let gameScreen = document.querySelector("#game-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let hitScore = document.querySelector("#hits");

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let gameObj;

let soundtrackObj = new Audio("./sound/soundtrack.mp3");
soundtrackObj.volume = 0.05;

let impactSoundObj = new Audio("./sound/impact.ogg");

startButton.addEventListener("click", () => {
  //hide splash screen
  splashScreen.style.display = "none";
  //show game screen
  gameScreen.style.display = "flex";
  //create new game
  gameObj = new Game(ctx);
  //zero scoreboard
  hitScore.innerHTML = "0";
  //begin new game
  gameObj.setControls();
  gameObj.gameLoop();
  soundtrackObj.play();
});

restartButton.addEventListener("click", () => {
  //hide gameover screen
  gameoverScreen.style.display = "none";
  //show game screen
  gameScreen.style.display = "flex";
  //create new game
  gameObj = new Game(ctx);
  //zero scoreboard
  hitScore.innerHTML = "0";
  //begin new game
  gameObj.setControls();
  gameObj.gameLoop();
  soundtrackObj.play();
});
