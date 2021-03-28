class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0,
            
        }
       
        this.visibility=225
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("neonsqaure2.png")
        World.add(world, this.body);
      }
      display(){
     
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          fill("blue")
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
          
          else{
            push ()
            World.remove(world,this.body)
          this.visibility=this.visibility-5
          pop ()
        }
      
      }
}