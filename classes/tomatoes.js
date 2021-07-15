class Tomato {
  constructor(context, player, origin, festivalero) {
    this.image = new Image();
    this.image.src = "./images/tomato.png";
    this.origin = origin;
    if (origin === "festivalero") {
      this.width = festivalero.width / 3;
      this.height = festivalero.width / 3;
      this.x = festivalero.x - 18;
      this.y = festivalero.y - 10;
      this.speed = 3;
    } else {
      this.width =
        player.tomatoSize > 1 ? player.width / 3 : player.width / 1.5;
      this.height =
        player.tomatoSize > 1 ? player.height / 3 : player.height / 1.5;
      this.x =
        player.side === "left" ? player.x - 18 : player.x + player.width - 20;
      this.y = player.y - 20;
      this.speed = 10;
    }
    this.ctx = context;
  }

  draw = (player) => {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  move = () => {
    if (this.origin === "player") {
      this.y -= this.speed;
    } else {
      this.y += this.speed;
    }
  };

  tomatoHitsTarget = (target) => {
    return (
      this.x < target.x + target.width &&
      this.x + this.width > target.x &&
      this.y < target.y + target.height &&
      this.y + this.height > target.y
    );
  };

  canvasCollision = () => {
    return this.y - this.height < 0 || this.y + this.height > canvas.height;
  };
}
