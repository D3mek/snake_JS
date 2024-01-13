var Food = {};
var foodId = 1;

Food.get = function(){
    var _foodX = Math.floor(Math.random() * n);
    var _foodY = Math.floor(Math.random() * n);
    // check for empty space for food
    while( Board[_foodY][_foodX] !== boardId ){
        _foodX = Math.floor(Math.random() * n);
        _foodY = Math.floor(Math.random() * n);
    }
    // set position of food on board
    Board[_foodY][_foodX] = foodId;

    // return position of food
    return [_foodY, _foodX];
}

var food = Food.get(); // get position of food

// check if food was eaten
Food.eat = function(position){
    if( position[0] === food[0] && position[1] === food[1] ){
        food = Food.get(); // get new position of food
        return true;
    }
    return false;
}
