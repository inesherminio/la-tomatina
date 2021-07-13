class ClothesRack {
  constructor(context) {
    this.width = 90;
    this.height = 50;
    this.x = Math.max(0, Math.floor(Math.random() * canvas.width) - this.width);
    this.y = 10;
    this.image = new Image();
    this.image.src = "./images/clothes-rack.png";
    this.speed = 1;
    this.difficulty = 2;
    this.ctx = context;
  }

  draw = () => {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  move = () => {
    this.y += this.speed;
  };

  floorCollision = () => {
    return this.y + this.height > canvas.height;
  };
}
