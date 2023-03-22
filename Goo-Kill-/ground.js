class Ground {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.w = w;
    this.h = 700;
    this.altura = this.h;

    this.image = new Image();
    this.image.src = "images/battleground.png";

    this.posX = 0;
    this.posY = 650 ;

    this.velX = 4;
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.w, this.h);
    this.ctx.drawImage(this.image, this.posX + this.w, this.posY, this.w, this.altura)

    this.move();
  }
  move() {
    this.posX -= this.velX;
    if (this.posX <= -this.w) {
      this.posX = 0;
    }
  }
}
