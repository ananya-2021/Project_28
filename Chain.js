class Chain{
    constructor(bodyA,pointB){
      var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness: 0.004,
        length: 10
        }
      this.bodyA = bodyA;
      this.pointB = pointB;
      this.chain = Constraint.create(options);
      World.add(world,this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(bodyA){
       this.chain.bodyA=bodyA;
    }
    
 
}

