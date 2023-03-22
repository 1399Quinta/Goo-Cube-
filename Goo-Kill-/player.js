class Player {
  
    constructor(ctx, playerW, playerH, keys) {
      this.ctx = ctx;
  
      this.playerW = playerW;
      this.playerH = playerH;
  
      this.width = 200;
      this.height = 350;
  
      this.image = new Image();
      this.image.src = "./images/Run.png";
      this.image.frames = 8;
      this.image.framesIndex = 0;
  
      this.posX = 275;
      this.posY =300;

      this.posY0 = this.posY;
    
      this.salto = 50;
      this.velY = 2;
      this.gravity = 0.5;
  
      this.keys = keys;
  
      this.setListener();
    }
  
    draw(framesCounter) {
      this.ctx.drawImage(
        this.image,
        (this.image.width / this.image.frames) * this.image.framesIndex,
        0,
        this.image.width / this.image.frames,
        this.image.height,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
  
      this.animate(framesCounter);
      this.jump();
    }
  
    animate(framesCounter) {
      if (framesCounter % 3== 0) {
        this.image.framesIndex++;
      }
      if (this.image.framesIndex >= this.image.frames) {
        this.image.framesIndex = 0;
      }
    }
    setListener() {
      document.addEventListener("keydown", (e) => {
        if (e.keyCode == this.keys.jumpR) {
          this.jump();
        }
      });
    }
  
    jump() {
      if (this.posY < this.posY0) {  
        this.posY += this.velY;
        this.velY += this.gravity;
    
      }
    }

    
  }
  
  
  

