const tic_tac_toe = {
    board: ['','','','','','','','',''],
    player: 'X',
    winner: null,
    winningCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
}
for (let i = 0; i < 9; i++) {
    document.getElementById(i).addEventListener('click', function() {
        if (tic_tac_toe.board[i] === '') {
            tic_tac_toe.board[i] = tic_tac_toe.player;
            document.getElementById(i).innerHTML = tic_tac_toe.player;
            tic_tac_toe.player = tic_tac_toe.player === 'X' ? 'O' : 'X';
        }
        for (let j = 0; j < tic_tac_toe.winningCombinations.length; j++) {
            if (tic_tac_toe.board[tic_tac_toe.winningCombinations[j][0]] === tic_tac_toe.board[tic_tac_toe.winningCombinations[j][1]] && tic_tac_toe.board[tic_tac_toe.winningCombinations[j][1]] === tic_tac_toe.board[tic_tac_toe.winningCombinations[j][2]] && tic_tac_toe.board[tic_tac_toe.winningCombinations[j][0]] !== '') {
                document.getElementById('winner').innerHTML = '<div class="overlay"><div class="box"><button id="close">X</button><h2>Winner:   ' + tic_tac_toe.board[tic_tac_toe.winningCombinations[j][0]] + '</h2></div></div>';
                document.getElementById('winner').style.display = 'block';
                document.getElementById('close').addEventListener('click', setReset)
            }
        }
    }
    )
}
const setReset = () => {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = '';
        document.getElementById('winner').innerHTML = '';
    }
    tic_tac_toe.board = ['','','','','','','','','']
}
const reset = document.getElementById('reset');
reset.addEventListener('click', setReset);

