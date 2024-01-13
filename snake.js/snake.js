var direction = null; // direction for snake to go

var snakeId = 2; // this will be for knew what is snake on board

var snakeMove; // interval for move

var _gameOver = false;

// game score
var score = 0;

class Node{ // create new node for snake
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Snake{
    constructor(){
        this.head = null;
    }

    // add new node to linked list ex. if snake eat food or on start game for init snake
    add(data){
        var newNode = new Node(data);

        // if first node is added to list -> head
        if( this.head == null ){
            this.head = newNode;
            return;
        }

        // come to last node
        var current = this.head;
        while( current.next ){
            current = current.next;
        }
        // add new node to end of list
        current.next = newNode;
    }

    // initialize snake first positions of 2 nodes
    init(){
        this.add([15, 15]); // head of linked list
        this.add([16, 15]); // [Y, X] row, col
        var current = this.head;
        while( current ){
            var snakeYX = current.data;
            Board[snakeYX[0]][snakeYX[1]] = snakeId;
            current = current.next;
        }
    }
    // check for end of board
    SnakeInBounds(position) {
        if( position[0] >= 0 && position[0] < Board.length && 
            position[1] >= 0 && position[1] < Board[0].length ){
            
            return true;
        }
        return false;
    }

    SnakeOverlap(position){
        if( Board[position[0]][position[1]] == snakeId ){
            return true;
        }
        return false;
    }

    // move every 120ms
    move(){
        snakeMove = setInterval( () => {
                var current = this; // linked list for snake
                // check for direction for snake to go
                switch( direction ){
                    case 'UP':
                        var newHead = [current.head.data[0] - 1, current.head.data[1]]; // store new position of head
                        break;
                    case 'DOWN':
                        var newHead = [current.head.data[0] + 1, current.head.data[1]]; // store new position of head
                        break;
                    case 'LEFT':
                        var newHead = [current.head.data[0], current.head.data[1] - 1]; // store new position of head
                        break;
                    case 'RIGHT':
                        var newHead = [current.head.data[0], current.head.data[1] + 1]; // store new position of head
                        break;
                    default:
                        var newHead = [current.head.data[0] - 1, current.head.data[1]]; // df direction to up
                        break;
                }
                
                var last = [...current.head.data]; // copy last position of head

                if( !this.SnakeInBounds(newHead) ){ // check if snake is in bounds of board
                    _gameOver = true;
                } else if( this.SnakeOverlap(newHead) ){ // check if snake eat his self
                        console.error("Snake eat his self!")
                        Game.over(); // game over snake cnt eat his self
                }      

                while( current ){
                    if( !_gameOver ){
                        if( 'head' in current ){ // check for head
                            Board[last[0]][last[1]] = boardId; // overwritte last position of head to 0
                            Board[newHead[0]][newHead[1]] = snakeId; // overwritte new position for snake from 0 to 2
                            current.head.data = newHead; // overwritte position of head in list
                            current = current.head.next; // next node
                            //continue;
                        }
                        // move with snake tail section
                        var temp = null; // for store lsat position of node
                        Board[current.data[0]][current.data[1]] = boardId; // overwritte next node to 0 on board
                        Board[last[0]][last[1]] = snakeId; // move with next node to last position of previous node
                        
                        temp = [...current.data]; // copy position of current node
                        current.data = last; // overwritte data of current node to last node
                        last = temp; // overwritte for next node to set this position of current node
                        
                        current = current.next; // next node
                        
                        if( Food.eat(newHead) ){
                            score++; // increase score
                            this.add(last) // add new node at the end
                        }
                    } else {
                        console.error("snake out of bound!"); // print error 
                        Game.over(); // game over you lost
                        break;
                    }
                }

                Draw.all(); // draw board
            }, 130);
    }
}

var _snake = new Snake(); // create snake linked list
_snake.init(); // initialize snake
_snake.move(); // make snake move