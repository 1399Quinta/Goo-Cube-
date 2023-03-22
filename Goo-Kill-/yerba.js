class Yerba {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.w = w;
    this.h = h;

    this.Image = new Image();
    this.Image.src = "./images/front_decor.png";

    this.posX = 0;
    this.posY = 0;
  }

  draw() {
   this.ctx.drawImage(this.Image, this.posX, this.posY, this.w, this.h);
  }
}

