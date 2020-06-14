class Launcher {
    constructor(body,anchor){
        var options={
bodyA:body,
stiffness : 0.05,
pointB:anchor,
length:10

        }
        this.bodyA = body;
        this.pointB = anchor;
        this.launcher = Constraint.create(options)
        World.add(world,this.launcher);
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB
            strokeWeight(5);
            line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}