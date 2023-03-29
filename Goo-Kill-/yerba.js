class Yerba {
  constructor(ctx) {
    this.ctx = ctx;
    this.imagW = this.imageW;
    this.ImageH = this.ImageH;

    this.Image = new Image();
    this.Image.src = "./images/front_decor.png";

    this.posX = 0;
    this.posY = Background.ImageH + Ground.ImageH;
    
  }

  draw() {
   this.ctx.drawImage(this.Image, this.posX, this.posY, this.w, this.h);
  }
}

