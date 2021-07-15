let splashScreen = document.querySelector("#splash-screen");
let gameScreen = document.querySelector("#game-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let hitScore = document.querySelector("#hits");
let festivalerosBox = document.querySelector("#festivaleros");
let festivalero1 = document.querySelector("#festivalero1");
let festivalero2 = document.querySelector("#festivalero2");
let festivalero3 = document.querySelector("#festivalero3");
let yourScore = document.querySelector("#your-score");

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let gameObj;

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
  //reset festivaleros winning box
  festivalero1.style.display = "none";
  festivalero2.style.display = "none";
  festivalero2.style.display = "none";
  festivalerosBox.style.background = "white";
  //begin new game
  gameObj.setControls();
  gameObj.gameLoop();
});
