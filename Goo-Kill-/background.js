class Background {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.w = w;
    this.h = h;

    this.image = new Image();
    this.image.src = "./images/Clouds 3.png";

    this.posX = 0;
    this.posY = -130;

    this.velX = 0.5;
  }
  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.w, this.h);
    this.ctx.drawImage(
      this.image,
      this.posX + this.w,
      this.posY,
      this.w,
      this.h
    );

    this.move();
  }
  move() {
    this.posX -= this.velX;
    if (this.posX <= -this.w) {
      this.posX = 0;
    }
  }
}
