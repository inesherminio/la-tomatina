class Tomato {
  constructor(context, player) {
    this.image = new Image();
    this.image.src = "./images/tomato.png";
    this.width = 20;
    this.height = 20;
    this.x =
      player.side === "left" ? player.x - 18 : player.x + player.width - 20;
    this.y = player.y - 20;
    this.speed = 10;
    this.ctx = context;
  }

  draw = (player) => {
    this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      player.width / 3,
      player.height / 3
    );
  };

  move = () => {
    this.y -= this.speed;
  };

  tomatoHitsTarget = (target) => {
    return (
      this.x < target.x + target.width &&
      this.x + this.width > target.x &&
      this.y < target.y + target.height &&
      this.y + this.height > target.y
    );
  };
}
