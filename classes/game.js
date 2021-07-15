class Game {
  constructor(context) {
    this.bg = new Image();
    this.bg.src = "./images/bg.jpg";
    this.sound = new Audio("./sound/soundtrack.mp3");
    this.sound.volume = 0.05;
    this.player = new Player(context);
    this.tomatoes = [];
    this.festivaleros = [];
    this.festivalerosThatWin = 0;
    this.clothesRack = [];
    this.isGameOn = true;
    this.ctx = context;
    this.targetGenerationSpeed = 2000;
    this.levelUpSpeed = 10000;
    this.gameScore = 0;
    this.splashTime = 750;
  }

  drawSceene = () => {
    this.ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.sound.play();
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
        this.player.tomatoSize = Math.round(Math.random() * 10);
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

  removeTomatoes = () => {
    this.tomatoes.forEach((tomato) => {
      if (tomato.topCollision()) {
        // search for tomato
        const indexOfTomato = this.tomatoes.indexOf(tomato);
        // remove the tomato
        this.tomatoes.splice(indexOfTomato, 1);
      }
    });
  };

  // Festivaleros related methods

  drawFestivaleros = () => {
    this.festivaleros.forEach((festivalero) => festivalero.draw());
  };

  generateFestivaleros = () => {
    const typeOfFestivalero = () => {
      return Math.round(Math.random()) === 0;
    };
    const newFestivalero = new Festivalero(this.ctx, typeOfFestivalero());
    this.festivaleros.push(newFestivalero);
  };

  moveFestivaleros = () => {
    this.festivaleros.forEach((festivalero) => festivalero.move());
  };

  hitFestivaleros = () => {
    this.festivaleros.forEach((festivalero) => {
      this.tomatoes.forEach((tomato) => {
        if (tomato.tomatoHitsTarget(festivalero)) {
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

  festivalerosWinning = () => {
    this.festivaleros.forEach((festivalero) => {
      if (festivalero.floorCollision()) {
        // search for festivalero
        const indexOfFestivalero = this.festivaleros.indexOf(festivalero);
        // remove the hit festivalero
        this.festivaleros.splice(indexOfFestivalero, 1);
        // add 1 to number of festivaleros that won
        this.festivalerosThatWin += 1;
        // display 1 festivalero bellow the canvas and change the color
        if (this.festivalerosThatWin === 1) {
          festivalero1.style.display = "block";
          festivalerosBox.style.background = "grey";
        } else if (this.festivalerosThatWin === 2) {
          festivalero2.style.display = "block";
          festivalerosBox.style.background = "#6ba96a";
        } else {
          festivalero3.style.display = "block";
          festivalerosBox.style.background = "#D41920";
        }
      }
    });
  };

  // Clothes-rack related methods

  drawClothesRack = () => {
    this.clothesRack.forEach((clothe) => clothe.draw());
  };

  generateClothesRack = () => {
    const newClothe = new ClothesRack(this.ctx);
    this.clothesRack.push(newClothe);
  };

  moveClothesRack = () => {
    this.clothesRack.forEach((clothe) => clothe.move());
  };

  hitClothesRack = () => {
    this.clothesRack.forEach((clothe) => {
      this.tomatoes.forEach((tomato) => {
        if (tomato.tomatoHitsTarget(clothe)) {
          // play impact audio
          impactSoundObj.play();
          this.gameoverAction();
        }
      });
    });
  };

  randomTarget = () => {
    if (Math.round(Math.random() * 10) > 2) {
      this.generateFestivaleros();
    } else {
      this.generateClothesRack();
    }
  };

  // Gameover functions

  gameoverAction = () => {
    // stop game from running
    this.isGameOn = false;
    // remove the canvas
    gameScreen.style.display = "none";
    // display gameover screen
    gameoverScreen.style.display = "flex";
    // stop soundtrack
    this.sound.pause();
    this.sound.currentTime = 0;
    this.sound.muted = true;
  };

  gameoverCheck = () => {
    if (this.festivalerosThatWin > 3 || this.hitClothesRack()) {
      this.gameoverAction();
    }
  };

  // Game loop related methods

  clearCanvas = () => {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  moveElements = () => {
    this.moveTomatoes();
    this.moveFestivaleros();
    this.moveClothesRack();
  };

  checkAllCollisions = () => {
    this.hitFestivaleros();
    this.festivalerosWinning();
    this.gameoverCheck();
  };

  drawElements = () => {
    this.drawSceene();
    this.player.draw();
    this.drawTomatoes();
    this.drawFestivaleros();
    this.drawClothesRack();
  };

  // The game loop

  gameLoop = (targetTimestamp = 0, levelUpTimestamp = 10000) => {
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
        if (timestamp - targetTimestamp > this.targetGenerationSpeed) {
          this.randomTarget();
          targetTimestamp = timestamp;
        }
        if (timestamp - levelUpTimestamp > this.levelUpSpeed) {
          this.targetGenerationSpeed *= 0.8;
          levelUpTimestamp = timestamp;
        }
        this.gameLoop(targetTimestamp, levelUpTimestamp);
      });
    }
  };
}
