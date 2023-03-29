class Player {
  constructor(ctx, playerW, playerH, keys) {
    this.ctx = ctx;

    this.playerW = playerW;
    this.playerH = playerH;

    this.imageW = 8;
    this.imageH = this.imageH;

    this.posX = 275;
    this.posY = 300;

    this.image = new Image();
    this.image.src = "./images/Run.png";

    this.image.frames = 8;
    this.image.framesIndex = 0;
    this.framesCounter = this.framesCounter;

    this.posY0 = this.posY;

    //this.posYGround = Ground.posY,

    this.salto = 400;
    this.velY = 3;
    this.gravity = 0.1;

    this.keys = keys;

    this.setListener();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.image.width / this.image.frames * this.image.framesIndex,
      0,
      this.image.width / this.image.frames,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    )
    // this.ctx.drawImage(this.image, (this.playerW / this.image.frames) * this.image.framesIndex, this.playerH,
    //   this.posX,
    //   this.posY,
    //   this.imageW, this.imageH);

    this.animate(framesCounter);
    this.jump();
  }

  animate(framesCounter) {
    if (framesCounter % 3 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
  setListener() {
    document.addEventListener("keydown", (event) => {
      if (event.key = this.keys.jumpR) {
        this.jump();
      } else if (event.key = this.keys.actioG) {
        this.kill();
      }
    });
  }

  jump() {
    this.posY -= this.salto;
    if (this.posY >= this.posY - this.salto) {
      this.posY -= this.gravity
      if (this.posY = this.posY + this.imageH) {
        this.posY = this.posY0
      }
    }
  }
  kill(){
  }
}