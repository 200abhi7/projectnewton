class Bob {
    constructor(x,y,r){
var options ={
    isStatic : true,
    restitution:1.0,
    friction:1.0,
    density:1.0
}

//this.image = loadImage("paper.png")
    

this.body = Bodies.circle(x, y, r, options);
this.r = r;
this.x = x;
this.y = y;


World.add(world,this.body)


}
display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y)

   ellipseMode(CENTER);
    ellipse(0,0,this.r)

    
    
    pop();
}
}

