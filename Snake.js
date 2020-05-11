function Snake(){
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;
    this.Length= 0;
    this.Extention=[];

    this.direction= function(x,y){
        this.xspeed= x;
        this.yspeed= y;
    }

    this.update= function(){

        if (this.Length=== this.Extention.length){
            for(var i=0; i<this.Length-1;i++){
                this.Extention[i] = this.Extention[i+1];
        }
    }
    this.Extention[this.Length-1]= createVector(this.x,this.y);

        this.x= this.x + this.xspeed*SCALE;
        this.y= this.y + this.yspeed*SCALE;

        this.x= constrain(this.x,0,width-SCALE);
        this.y = constrain(this.y,0,height-SCALE);
    }

    this.death= function(){
        for (var i=0; i< this.Extention.length; i++){
            var pos= this.Extention[i];
            var magnitde= dist(this.x, this.y,pos.x,pos.y);
            if(magnitde<0.01){
                this.Length=0;
                this.Extention=[];
            }
        }
    }

    this.show= function(){
        
        fill("white")
        for(var i=0; i<this.Length; i++){
            rect(this.Extention[i].x,this.Extention[i].y,SCALE,SCALE);
        }
        fill(255);
        rect(this.x, this.y,SCALE,SCALE);
    }

    this.consume= function(pos){

        var dis= dist(this.x,this.y,pos.x,pos.y);
        if(dis<1){
            this.Length++;
            return true;
        }   

        else{
            return false;
        }
    }

}