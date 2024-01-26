import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, activePlayer}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    let notification;

    function handleSelectSquare(rowIndex, colIndex) {
        let checkGameBoardFull = 0;

        setGameBoard((prevGameBoard) => {
            const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

            if (updateGameBoard[rowIndex][colIndex] === null) {
                updateGameBoard[rowIndex][colIndex] = activePlayer;
                checkGameBoardFull++;
                onSelectSquare();
            }
            return updateGameBoard;
        });

        const
        // debugger
        if(checkWinner(rowIndex,colIndex)) {
            notification = gameBoard[rowIndex][colIndex] + " is winner!";
        } else if(checkGameBoardFull === 6 && !checkWinner(rowIndex,colIndex)) {
            notification = "Hòa rồi chơi ván mới đê!";
        }
        console.log(notification);
    }

    function checkWinner(rowIndex, colIndex) {
debugger
        if (((rowIndex === 1) && (colIndex === 1)) || ((rowIndex !== 1) && (colIndex !== 1))) {
            if (checkHorizontalLine(rowIndex, colIndex) || checkVerticalLine(rowIndex, colIndex) || checkDiagonalLine(rowIndex, colIndex)) {
                return true;
            } else return false;
        } else {
            if (checkHorizontalLine(rowIndex, colIndex) || checkVerticalLine(rowIndex, colIndex)) {
                return true;
            } else return false;
        }

    }

    // check duong ngang
    function checkHorizontalLine(rowIndex, colIndex) {
debugger
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if (gameBoard[rowIndex][colIndex] === gameBoard[rowIndex][i]) {
                count++;
            }
        }
        if (count === 3) {
            return true;
        } else {
            return false;
        }
    }

    // check duong doc
    function checkVerticalLine(rowIndex, colIndex) {
        debugger
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if (gameBoard[rowIndex][colIndex] === gameBoard[i][colIndex]) {
                count++;
            }
        }
        if (count === 3) {
            return true;
        } else {
            return false;
        }
    }

    // check duong cheo
    function checkDiagonalLine(rowIndex, colIndex) {
        debugger
        let count = 0;
            if ((gameBoard[rowIndex][colIndex] === gameBoard[0][0] && gameBoard[rowIndex][colIndex] === gameBoard[1][1] && gameBoard[rowIndex][colIndex] === gameBoard[2][2])
            || (gameBoard[rowIndex][colIndex] === gameBoard[0][2] && gameBoard[rowIndex][colIndex] === gameBoard[1][1] && gameBoard[rowIndex][colIndex] === gameBoard[2][0])) {
                count++;
            }

        if (count === 3) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, indexRow) => <li key={indexRow}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(indexRow, colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>
            )}


            {/*<li>*/}
            {/*    <ol>*/}
            {/*        <li>{initialGameBoard[0][0]}</li>*/}
            {/*        <li>{initialGameBoard[0][1]}</li>*/}
            {/*        <li>{initialGameBoard[0][2]}</li>*/}
            {/*    </ol>*/}
            {/*    <ol>*/}
            {/*        <li>{initialGameBoard[1][0]}</li>*/}
            {/*        <li>{initialGameBoard[1][1]}</li>*/}
            {/*        <li>{initialGameBoard[1][2]}</li>*/}
            {/*    </ol>*/}
            {/*    <ol>*/}
            {/*        <li>{initialGameBoard[2][0]}</li>*/}
            {/*        <li>{initialGameBoard[2][1]}</li>*/}
            {/*        <li>{initialGameBoard[2][2]}</li>*/}
            {/*    </ol>*/}
            {/*</li>*/}
        </ol>
    );
}