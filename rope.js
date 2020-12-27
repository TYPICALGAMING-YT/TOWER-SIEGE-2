class Rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:5,
            stiffness:0.04
        }
        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    attach(body){
     this.rope.bodyA = body;
    }
    fly(){
    this.rope.bodyA = null
    }
    display(){
    if (this.rope.bodyA){
    var pointB = this.pointB
    strokeWeight(3)
    stroke("red")
    line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, pointB.x, pointB.y)
    }
 }
 }