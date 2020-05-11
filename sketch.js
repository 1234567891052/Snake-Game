var SCALE= 20;
var snake;
var food;

function setup(){
    createCanvas(1200,800);

    snake= new Snake();
    frameRate(5);
    displace();
    }

    function displace(){
        var coloumns= floor(width/SCALE);
        var row= floor(height/SCALE);
        food=createVector(floor(random(coloumns)),(floor(random(row))));
        food.mult(SCALE);
    }
    
    
    function draw (){
        background(51);

        snake.death();
        snake.update();
        snake.show();

        fill("orange");
        rect(food.x,food.y,SCALE,SCALE);

        if(snake.consume(food)){
            displace();
        }
    }
    
    function keyPressed(){
        if(keyCode=== UP_ARROW){
            snake.direction(0,-1);
        } 
        if (keyCode=== DOWN_ARROW){
            snake.direction(0,1);
        }
        if (keyCode=== RIGHT_ARROW){
            snake.direction(1,0);
        }
        if (keyCode=== LEFT_ARROW){
            snake.direction(-1,0);
        }
    }