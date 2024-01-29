import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useEffect, useState} from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveActivePlayer(turns) {
    let currentPlayer = "X";
    if (turns.length > 0 && turns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function App() {
const [player, setPlayer] = useState({
    X: "player 1",
    O: "player 2"
}
);
    const [turn, setTurn] = useState([]);
    const [countSelect, setCountSelect] = useState(0);
    const activePlayer = deriveActivePlayer(turn);
    let notification = null;
    let winner = null;

    let gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const t of turn) {
        const {square, player} = t;
        const {row, col} = square;
        gameBoard[row][col] = player;
        notify(row, col);
    }


    function handleSelectSquare(rowIndex, colIndex) {

        setTurn((preTurn) => {
            const currentPlayer = deriveActivePlayer(preTurn);

            const updatedTurn = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...preTurn];
            // debugger
            setCountSelect(countSelect + 1);

            return updatedTurn;

        });

    }

    function notify(rowIndex, colIndex) {
        // debugger
        if (checkWinner(rowIndex, colIndex)) {
            let winnerSymbol = activePlayer === "X" ? "O" : "X";
            winner = player[winnerSymbol];
            notification = winner + " is winner!";

        } else if (countSelect === 9 && !checkWinner(rowIndex, colIndex)) {
            notification = "Hòa rồi chơi ván mới đê!";
        }
    }

    function checkWinner(rowIndex, colIndex) {
        // debugger
        if (((rowIndex === 1) && (colIndex === 1)) || ((rowIndex !== 1) && (colIndex !== 1))) {
            return !!(checkHorizontalLine(rowIndex, colIndex) || checkVerticalLine(rowIndex, colIndex) || checkDiagonalLine(rowIndex, colIndex));
        } else {
            return !!(checkHorizontalLine(rowIndex, colIndex) || checkVerticalLine(rowIndex, colIndex));
        }

    }

    // check duong ngang
    function checkHorizontalLine(rowIndex, colIndex) {
        // debugger
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if (gameBoard[rowIndex][colIndex] === gameBoard[rowIndex][i]) {
                count++;
            }
        }
        return count === 3;
    }

    // check duong doc
    function checkVerticalLine(rowIndex, colIndex) {
        // debugger
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if (gameBoard[rowIndex][colIndex] === gameBoard[i][colIndex]) {
                count++;
            }
        }
        return count === 3;
    }

    // check duong cheo
    function checkDiagonalLine(rowIndex, colIndex) {
        // debugger
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if ((gameBoard[rowIndex][colIndex] === gameBoard[0][0] && gameBoard[rowIndex][colIndex] === gameBoard[1][1] && gameBoard[rowIndex][colIndex] === gameBoard[2][2])
                || (gameBoard[rowIndex][colIndex] === gameBoard[0][2] && gameBoard[rowIndex][colIndex] === gameBoard[1][1] && gameBoard[rowIndex][colIndex] === gameBoard[2][0])) {
                count++
            }
        }

        return count === 3;
    }

    function handleRestart() {
        setTurn([]);
        setCountSelect(0);
    }

    function handlePlayerNameChange(symbol, newName) {

        setPlayer(prevPlayer => {
            return {
                ...prevPlayer,
                [symbol]: newName
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
                    <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
                </ol>
                {winner || notification ? <GameOver winner={winner} onRematch={handleRestart}/> : null}
                <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}
                           checkEndGame={notification !== null}/>
            </div>
            <Log turns={turn}/>
        </main>
    )

}

export default App
