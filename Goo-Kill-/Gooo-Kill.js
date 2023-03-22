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
    jumpR: 82,
    actionG: 71,
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

    }, 1000 / this.FPS);
  };

  reset() {
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
    this.background.draw();
    this.ground.draw();
    this.yerba.draw();
    //this.rocas.draw();
    this.player.draw(this.framesCounter);
  }
}
