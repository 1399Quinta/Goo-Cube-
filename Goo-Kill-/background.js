class Background {
  constructor(ctx,) {
    this.ctx = ctx;
    this.posX = 0;
    this.posY= -130;

    this.image = new Image();
    this.image.src = "./images/Clouds 3.png";

    this.backgroundW = this.backgroundW;
    this.backgroundH = 600;

    this.velX = 0.5;
  }
  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.imageW, this.imageH);
    this.ctx.drawImage(
      this.image,
      this.posX + this.imageW,
      this.posY,
      this.imageW,
      this.imageH,
    );

    this.move();
  }
  move() {
    this.posX -= this.velX;
    if (this.posX <= -this.imageW) {
      this.posX = 0;
    }
  }
}



