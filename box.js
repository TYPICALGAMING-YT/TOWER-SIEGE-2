class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("a-blue-box.jpg")
      this.visibility = 255
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //console.log(this.body.speed)
      if (this.body.speed<3){
      super.display
      }
      else {
        World.remove(world,this.body)
        push()
        this.visibility = this.visibility - 10
        tint(255,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("blue");
      tint(255,this.visibility)
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  