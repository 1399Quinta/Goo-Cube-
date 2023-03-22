class Rocas {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.w = 100;
    this.h = 100;

    this.posX = 500;
    this.posY = 550;

    this.image = new Image();
    this.image.src = "./images/roca.png";

    this.velX = 6;
  }
  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.w, this.h);
    
  }
}
