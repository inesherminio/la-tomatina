class Player {
  constructor(context) {
    this.width = 100;
    this.height = 100;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.height - 10;
    this.imageRight = new Image();
    this.imageRight.src = "./images/player-right.png";
    this.imageLeft = new Image();
    this.imageLeft.src = "./images/player-left.png";
    this.tomatoImage = new Image();
    this.tomatoImage.src = "./images/tomato.png";
    this.ctx = context;
    this.side = "left";
    this.tomatoSize = Math.round(Math.random() * 2);
  }

  draw = () => {
    let tomatoX = 80;
    this.ctx.drawImage(
      this.side === "left" ? this.imageLeft : this.imageRight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.tomatoImage,
      this.side === "left" ? this.x - 18 : this.x + tomatoX,
      this.tomatoSize > 1 ? this.y - 10 : this.y - 30,
      this.tomatoSize > 1 ? this.width / 3 : this.width / 2,
      this.tomatoSize > 1 ? this.height / 3 : this.height / 2
    );
  };

  moveLeft = () => {
    if (this.x - 30 > 0) {
      this.x -= 20;
    }
  };

  moveRight = () => {
    if (this.x + this.width + 30 < canvas.width) {
      this.x += 20;
    }
  };
}
