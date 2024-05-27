document.addEventListener("DOMContentLoaded", function() {
    var board = document.getElementById('ajedrez');
    var squares = [];

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var square = document.createElement('div');
            square.className = ((i + j) % 2 == 0) ? 'white' : 'black';
            board.appendChild(square);
            squares.push(square);
        }
    }
});

