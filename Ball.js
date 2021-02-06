class Ball{
    constructor(x,y,w,h,angle){
        var options={
            density:1,
            frictionAir:0.005
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width=w;
        this.height=h;

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(3);
        stroke("black")
        fill("yellow")
        fill("brown")
        ellipse(0,0,this.width,this.height)
        pop();
        
    }
    
}