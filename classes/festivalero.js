class Festivalero {
  constructor(context, boolean) {
    this.width = 80;
    this.height = 80;
    this.x = Math.max(0, Math.floor(Math.random() * canvas.width) - this.width);
    this.y = 10;
    this.image = new Image();
    this.image.src = "./images/festivalero.png";
    this.imageLeft = new Image();
    this.imageLeft.src = "./images/festivalero-left.png";
    this.speed = 1;
    this.difficulty = 2;
    this.ctx = context;
    this.attacker = boolean;
    this.tomatoImage = new Image();
    this.tomatoImage.src = "./images/tomato.png";
  }

  draw = () => {
    let tomatoX = 80;
    this.ctx.drawImage(
      this.attacker === true ? this.imageLeft : this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.tomatoImage,
      this.attacker === true ? this.x - 18 : 0,
      this.attacker === true ? this.y - 10 : 0,
      this.attacker === true ? this.width / 3 : 0,
      this.attacker === true ? this.height / 3 : 0
    );
  };

  move = () => {
    this.y += this.speed;
  };

  floorCollision = () => {
    return this.y + this.height > canvas.height;
  };
}
