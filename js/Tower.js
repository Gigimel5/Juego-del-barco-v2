class Torre{
    constructor(x,y,w,h){
        this.width=w;
        this.height=h;
        this.x=x;
        this.y=y;
        this.image=loadImage("./assets/tower.png");

        var op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        World.add(world,this.body);

       
    } 

    display(){
        var pos=this.body.position;
        push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
        pop();
     }
}
