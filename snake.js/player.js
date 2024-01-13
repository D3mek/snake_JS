var Player = {};

var UP = true;
var DOWN = false;
var LEFT = true;
var RIGHT = true;


// listener for keyboard inputs
Player.listen = function(){
    document.addEventListener('keydown', Player.press);
}

Player.press = function(e){
    switch(e.key){
        case 'ArrowUp':
            if( UP ){
                direction = "UP"; // variable is in snake file
                DOWN = false;
                RIGHT = true;
                LEFT = true;
            }
            break;
        case 'ArrowDown':
            if( DOWN ){
                direction = "DOWN";
                UP = false;
                RIGHT = true;
                LEFT = true;
            }
            break;
        case 'ArrowLeft':
            if( LEFT ){
                direction = "LEFT";
                RIGHT = false;
                UP = true;
                DOWN = true;
            }
            break;
        case 'ArrowRight':
            if( RIGHT ){
                direction = "RIGHT";
                LEFT = false;
                UP = true;
                DOWN = true;
            }
            break;
    }
}