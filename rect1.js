class  log{
    constructor(x,y,width,height){
    
    var body1={
  
    friction:0.3,
    density:1
    }
    this.body=Bodies.rectangle(x,y,width,height,body1)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    
    
    }
    displayshape(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("red")
    rectMode(CENTER)
    strokeWeight(4)
    stroke("red") 
    rect(0,0,this.width,this.height)
    pop()
    }
    }