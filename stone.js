class Stone{
    constructor(x,y,width,height,angle){
      var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
      }
      this.body=Bodies.circle(x,y,r);
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("stone.png");
      World.add=(world,this.body)
    }
}