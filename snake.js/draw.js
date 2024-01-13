//var Draw = {};

// Draw.all = function() {
//     // Create a document fragment
//     var fragment = document.createDocumentFragment();

//     // Create the score bar
//     var scoreBar = document.createElement('div');
//     scoreBar.id = 'score-bar';

//     var scoreLabel = document.createElement('span');
//     scoreLabel.id = 'score-label';
//     scoreLabel.textContent = 'SCORE:';
//     scoreBar.appendChild(scoreLabel);

//     var scoreSpan = document.createElement('span');
//     scoreSpan.id = 'score';
//     scoreSpan.textContent = score;
//     scoreBar.appendChild(scoreSpan);

//     fragment.appendChild(scoreBar);

//     // Create the game board table
//     var table = document.createElement('table');
    
//     for (let row = 0; row < Board.length; row++) {
//         var tr = document.createElement('tr');

//         for (let col = 0; col < Board[row].length; col++) {
//             var td = document.createElement('td');

//             if (Board[row][col] === 2) { // check for snake
//                 td.id = 'snake';
//             } else if (Board[row][col] === 1) { // check for food
//                 td.id = 'snakeFood';
//             }

//             tr.appendChild(td);
//         }

//         fragment.appendChild(tr);
//     }

//     table.appendChild(fragment);

//     // Replace the entire body content in one go
//     var body = document.body;
//     body.innerHTML = '';
//     body.appendChild(table);
// };

var Draw = {};


// make it faster to load :D .....

Draw.all = function(){
    var html = "<div id='score-bar'>";

    html += "<span id='score-label'>";
    html += "SCORE:";
    html += "</span>";

    html += "<span id='score'>";
    html += score;
    html += "</span>";

    html += "</div>";

    html += "<table>";
    for(let row=0; row<Board.length; row++){
        html += "<tr>";
        for(let col=0; col<Board[row].length; col++){
            if( Board[row][col] == snakeId ){ // check for snake
                html += "<td id='snake'>";
            } else if( Board[row][col] == foodId ){ // check for food
                html += "<td id='snakeFood'>";
            } else {
                html += "<td>";
            }
            //html += Board[row][col];
            
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";

    document.body.innerHTML = html;
}