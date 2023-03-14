const game = {

    canvas: undefined,
    ctx: undefined,whidth: undefined, height: undefined
    FPS: 60,frames: 0,

    background: undefined,
    player: undefined,
    obstacles: []

    keys:{

        jumpR: 82,
        actionG: 71,

    }
    init(){

        this.setContext(),
        this.setDimensions(),
        this.start(),

    }
     setContext(){

        this.canvas = document.querySelector("#Gooo-Cube"),
        this.ctx = this.canvas.getContext("2d"),
    }
    setDimensions(){

        this.width = window.innerWidth
        this.height = window.innerHeight

        this.canvas.setAttribute('width', this.width),
        this.canvas.setAttribute('height', this.hright)

    }
    start(){
         
        this.reset()

        this.interval = setInterval(() => {
            this.frames++
            if (this.frames >= 4000){
                this.frames = 0,
            }
        },1000 / this.FPS)

        this.clear()
        this.draw()

    }
    clear(){

        this.background = this.background(this.ctx, this.w, this.h)

    }


};

 



