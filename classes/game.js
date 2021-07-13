class Game {
  constructor(context) {
    this.bg = new Image();
    this.bg.src = "../images/bg.jpg";
    this.sound;
    this.player = new Player(context);
    this.tomatoes = [];
    this.festivaleros = [];
    this.isGameOn = true;
    this.ctx = context;
    this.festivaleroGenerationSpeed = 2000;
    this.levelUpSpeed = 10000;
    this.gameScore = 0;
    this.splashTime = 750;
  }

  drawBg = () => {
    this.ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  // All game controls go here

  setControls = () => {
    window.addEventListener("keydown", (event) => {
      if (event.code === "ArrowLeft") {
        this.player.moveLeft();
      }
      if (event.code === "ArrowRight") {
        this.player.moveRight();
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        this.generateTomato();
        this.player.side = this.player.side === "left" ? "right" : "left";
      }
    });
  };

  // Tomato related methods

  drawTomatoes = () => {
    this.tomatoes.forEach((tomato) => tomato.draw(this.player));
  };

  generateTomato = () => {
    const newTomato = new Tomato(this.ctx, this.player);
    this.tomatoes.push(newTomato);
  };

  moveTomatoes = () => {
    this.tomatoes.forEach((tomato) => tomato.move());
  };

  // Festivaleros related methods

  drawFestivaleros = () => {
    this.festivaleros.forEach((festivalero) => festivalero.draw());
  };

  generateFestivaleros = () => {
    const newFestivalero = new Festivalero(this.ctx);
    this.festivaleros.push(newFestivalero);
  };

  moveFestivaleros = () => {
    this.festivaleros.forEach((festivalero) => festivalero.move());
  };

  hitFestivaleros = () => {
    this.festivaleros.forEach((festivalero) => {
      this.tomatoes.forEach((tomato) => {
        if (tomato.tomatoHitsFestivalero(festivalero)) {
          // search for festivalero and tomato
          const indexOfFestivalero = this.festivaleros.indexOf(festivalero);
          const indexOfTomato = this.tomatoes.indexOf(tomato);
          // play impact audio
          impactSoundObj.play();
          // remove the hit festivalero
          this.festivaleros.splice(indexOfFestivalero, 1);
          // add 1 point to scoreboard
          this.gameScore += 1;
          hitScore.innerText = this.gameScore;
          // remove the splashed tomato
          this.tomatoes.splice(indexOfTomato, 1);
        }
      });
    });
  };

  gameoverCheck = () => {
    this.festivaleros.forEach((festivalero) => {
      if (festivalero.floorCollision()) {
        const indexOfFestivalero = this.festivaleros.indexOf(festivalero);
        // stop game from running
        this.isGameOn = false;
        // remove the canvas
        gameScreen.style.display = "none";
        // display gameover screen
        gameoverScreen.style.display = "flex";
        // stop soundtrack
        soundtrackObj.muted = true;
      }
    });
  };

  // Game loop related methods

  clearCanvas = () => {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  moveElements = () => {
    this.moveTomatoes();
    this.moveFestivaleros();
  };

  checkAllCollisions = () => {
    this.hitFestivaleros();
    this.gameoverCheck();
  };

  drawElements = () => {
    this.drawBg();
    this.player.draw();
    this.drawTomatoes();
    this.drawFestivaleros();
  };

  // The game loop

  gameLoop = (festivaleroTimestamp = 0, levelUpTimestamp = 10000) => {
    //clear canvas
    this.clearCanvas();
    //move elements and other actions
    this.moveElements();
    //check collisions
    this.checkAllCollisions();
    //draw elements
    this.drawElements();
    //request animation
    if (this.isGameOn) {
      requestAnimationFrame((timestamp) => {
        if (
          timestamp - festivaleroTimestamp >
          this.festivaleroGenerationSpeed
        ) {
          this.generateFestivaleros();
          festivaleroTimestamp = timestamp;
        }
        if (timestamp - levelUpTimestamp > this.levelUpSpeed) {
          this.festivaleroGenerationSpeed *= 0.8;
          levelUpTimestamp = timestamp;
        }
        this.gameLoop(festivaleroTimestamp, levelUpTimestamp);
      });
    }
  };
}
