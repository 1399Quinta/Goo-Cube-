class ground {

    constructor(ctx, w, h,)
    this.ctx = ctx, 
    this.w = w, 
    this.h = h,
    
    this.image = new Image(), this.image.src = "./images."
    this.posX = 0, this.posY = 0,
    this.velX = 4,

    draw(){

        this.ctx.dramImage(this.ctx, this.posX, this.posY, this.w, this.h )
        this.ctx.drawImage(this.image, this.posX + this.w, this.posY, this.w, this,h)
        this.moveBy()

    }
    moveBy(){

        this.posX -= velX
        if ( this.posX <= -this.width) {this.posX = 0;}
    }

};
