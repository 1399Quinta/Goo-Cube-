class Game {
  canvas= undefined;
  ctx = undefined;
  w = undefined;
  h = undefined;
  FPS = 60;
  framesCounter = 0;

  background = undefined;
  player = undefined;
  interval = undefined

  //obstacles = [];

  keys = {
    //keys simbolicas
    jumpR: "r",
    actionG: "g",
    acctionB: "b"
  };
  init() {
    this.setContext();
    this.setDimensions();
    this.start();
  }
  setContext() {
    this.canvas = document.getElementById("Goo-Cube-");
    this.ctx = this.canvas.getContext("2d");
  }

  setDimensions() {
    this.w = window.innerWidth;
    this.h =window.innerHeight;

    this.canvas.setAttribute("width", this.w);
    this.canvas.setAttribute("height", this.h);
  }

  start() {
    this.reset();

    this.interval = setInterval(() => {
      this.framesCounter++;
      if (this.framesCounter >= 2000) {
        this.framesCounter = 0;
      }

      this.clear();
      this.drawAll();
      this.gameOver();

    }, 1000 / this.FPS);
  };

  reset() {
    this.anotherGround = new AnotherGround(this.ctx,this.w,this.h);
    this.background = new Background(this.ctx, this.w, this.h);
    this.player = new Player(this.ctx, this.w, this.h, this.keys);
    this.ground = new Ground(this.ctx, this.w, this.h);
    this.yerba = new Yerba(this.ctx, this.w, this.h);
    //this.rocas = new Rocas(this.ctx, this.w, this.h)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  drawAll() {
    this.anotherGround.draw();
    this.background.draw();
    this.ground.draw();
    this.yerba.draw();
    //this.rocas.draw();
    this.player.draw(this.framesCounter);
  }
  gameOver(){
    if( this.player.posY + this.player.h <= this.anotherGround.posY){
      this.clear() ;
      this.drawAll();
    }

  }
}
