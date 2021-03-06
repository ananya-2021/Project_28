class Stone{
    constructor(x,y,width,height){
        var options = {
            //'isStatic' : false,
            'restitution' : 0.5,
            'friction' : 1.0,
            'density' : 1.5
        }
    this.image = loadImage("stone.png");
    this.body = Bodies.circle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
