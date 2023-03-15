class background {

    constructor(ctx, w,h)

    this.ctx = ctx,
    this.w = w,
    this.h = h

    this.image(),
    this.image.src = "./images/Clouds 8.png",
    
    this.posX = 0,this.posY = 0,
;
    this.velX = 1,

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.w, this.h,)
        this.ctx.drawImage(this.image, this.posX + this.w, this.posY, this.w, this,h)
        
        this.move()

    }
    move(){

        this.posX -= this.velX
        if ( this.posX <= -this.width) {this.posX = 0;}
        
    }
};
  