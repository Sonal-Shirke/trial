class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage= loadImage("sprites/smoke.png");
    this.traj=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.traj.push(position);
    }
   // var position=[this.body.position.x,this.body.position.y]
   // this.traj.push(position);
    console.log(this.body.position.x);
    for(var i=0;i<this.traj.length;i=i+1){
      image(this.smokeimage,this.traj[i][0],this.traj[i][1])
    }//end of for
    

    super.display();
  }//end of display
}
