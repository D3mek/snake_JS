var Game = {};



Game.start = function(){
    //document.addEventListener('keydown', function(e){
        //if( e.key === ' ' ){
            Player.listen(); // start listen for keyboard inputs
            Draw.all(); // draw board on page
        //}
    //});
}

Game.over = function(){
    clearInterval(snakeMove);
}
