var Board = [];

var n = 25; // 30x30
var boardId = 0;
for(let row=0; row<n; row++){
    Board.push([]);
    for(let col=0; col<n; col++){
        Board[row][col] = boardId;
    }
}

// 1 means its food, 0 means its empty space on board its just playgroud and 2 means that its snake 