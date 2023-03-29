class Ground {
  constructor(ctx,) {
    this.ctx = ctx;
    this.posX = 0;
    this.posY = Background.imageH;

    this.image = new Image();
    this.image.src = "images/battleground.png";

    this.imageW= this.imageW
    this.imageH =400;

    this.velX = 4;
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.imageW, this.imageH);
    this.ctx.drawImage(this.image, this.posX + this.imageW, this.posY, this.imageW, this.imageH);

    this.move();
  }
  move() {
    this.posX -= this.velX;
    if (this.posX <= -this.w) {
      this.posX = 0;
    }
  }
}

class AnotherGround extends Ground {
  constructor(ctx) {
    super(ctx)
      this.posX = 2000,
      this.posY = 500,

      this.width = 4000,
      this.height = 1000,

      //this.image() = new Image(''),

      draw()
      move();
  }

  draw() {
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    this.ctx.fillRect(9000,600, this.width,400)

  }
  move() {
    this.posX -= this.velX;
    if (this.posX <= 15000) {
      this.posX = 0;
    }
  }
} 
