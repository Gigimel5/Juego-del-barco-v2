class Cannon{
    constructor(x,y,width,height,angle){
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.angle=angle;
        this.image=loadImage("./assets/CANON.png");
        
    }

    display(){

        if(keyIsDown(RIGHT_ARROW) && this.angle<0.35){
            this.angle+=0.02;
        }
        if(keyIsDown(LEFT_ARROW) && this.angle>-1.45){
            this.angle-=0.02;
        }

        fill("#AAB7B8");
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        //rect(0,+15,this.width,this.height);
        image(this.image,0,0,this.width,this.height);
        pop();
        arc(this.x-30,this.y+100,75,90,PI,TWO_PI);
        
    }
}