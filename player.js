class player {
    
    constructor (ctx, w, h,)
    this.ctx = ctx, 
    this.w = w, 
    this.h = h,

    this.gameWidth =  gameW, this.height = gameH,
    this.width = 100, this.height = 100,

    this.image = new Image(), this.image.src = "./images/Attack_1.png",
    this.image.frames = 4, this.image.framesIndex = 0,

    this.posX = 50, this.posY = this.gameHeight - this.this.height - 20,
    this.posY0 = this.posY,

    this.velX = 1, this.gravity =0,4,
    this.keys = keys,

    //neceito saber qu ehace este apartado
    this.setListeners();

    draw(frames){

        this.ctx.drawImage(

            this.image, this.image.width / this.image.frames * this.image.framesIndex, 0,
            this.image.width / this.images.frames, this.image.height, 

            this.posX, this.posY, this.width, this.height,
        
        )
        this.animate(frames);
        this.move();
    
    } 
    animate(frames){ 

        if (this.frame % 5 === 0) {this.image.framesIndex++}
        if (this.image.framesIndex >= this.images.frames) {this.image.framesIndex = 0}

    }
    jump() {
        if (this.posY < this.posY0) { 
          this.posY += this.velY;
          this.velY += this.gravity;
        } else {
          this.posY = this.posY0;
          this.velY = 1;
        }
      }

   
    setListeners(){
        document.addEventListener('keydown',r =>{
            switch (r.keyCode){
                case this.keys.jumpR:
                    if( this.posY >= this.posY0){this.jump()} break

            }

        });
    }
    jump() {
        this.posY -= 40;
        this.velY -= 8;
    }
};

