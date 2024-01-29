const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, turns}) {

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // let notification;
    //
    // function handleSelectSquare(rowIndex, colIndex) {
    //
    //
    //     setGameBoard((prevGameBoard) => {
    //         const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //
    //         if (updateGameBoard[rowIndex][colIndex] === null) {
    //             updateGameBoard[rowIndex][colIndex] = activePlayer;
    //             checkGameBoardFull++;
    //             onSelectSquare();
    //         }
    //         return updateGameBoard;
    //     });
    //     // debugger
    //
    // }
    // useEffect((rowIndex, colIndex) => {
    //     notify(rowIndex,colIndex)
    // }, [gameBoard]);
    // function notify(rowIndex, colIndex) {
    //     let checkGameBoardFull = 0;
    //     if (checkWinner(rowIndex, colIndex)) {
    //         notification = gameBoard[rowIndex][colIndex] + " is winner!";
    //     } else if (checkGameBoardFull === 6 && !checkWinner(rowIndex, colIndex)) {
    //         notification = "Hòa rồi chơi ván mới đê!";
    //     }
    //     console.log(notification);
    // }
    //
    // function checkWinner(rowIndex, colIndex) {
    //     // debugger
    //     if (((rowIndex === 1) && (colIndex === 1)) || ((rowIndex !== 1) && (colIndex !== 1))) {
    //         notification = gameBoard[rowIndex][colIndex] + " is winner!";
    //         return !!(checkHorizontalLine(rowIndex, colIndex) || checkVerticalLine(rowIndex, colIndex) || checkDiagonalLine(rowIndex, colIndex));
    //     } else {
    //         notification = "Hòa rồi chơi ván mới đê!";
    //         return !!(checkHorizontalLine(rowIndex, colIndex) || checkVerticalLine(rowIndex, colIndex));
    //     }
    //
    // }
    //
    // // check duong ngang
    // function checkHorizontalLine(rowIndex, colIndex) {
    //     // debugger
    //     let count = 0;
    //     for (let i = 0; i < 3; i++) {
    //         if (gameBoard[rowIndex][colIndex] === gameBoard[rowIndex][i]) {
    //             count++;
    //         }
    //     }
    //     return count === 3;
    // }
    //
    // // check duong doc
    // function checkVerticalLine(rowIndex, colIndex) {
    //     // debugger
    //     let count = 0;
    //     for (let i = 0; i < 3; i++) {
    //         if (gameBoard[rowIndex][colIndex] === gameBoard[i][colIndex]) {
    //             count++;
    //         }
    //     }
    //     return count === 3;
    // }
    //
    // // check duong cheo
    // function checkDiagonalLine(rowIndex, colIndex) {
    //     // debugger
    //     let count = 0;
    //     if ((gameBoard[rowIndex][colIndex] === gameBoard[0][0] && gameBoard[rowIndex][colIndex] === gameBoard[1][1] && gameBoard[rowIndex][colIndex] === gameBoard[2][2])
    //         || (gameBoard[rowIndex][colIndex] === gameBoard[0][2] && gameBoard[rowIndex][colIndex] === gameBoard[1][1] && gameBoard[rowIndex][colIndex] === gameBoard[2][0])) {
    //         count++;
    //     }
    //
    //     return count === 3;
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, indexRow) => <li key={indexRow}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => onSelectSquare(indexRow, colIndex)}
                                    disabled={playerSymbol !== null}>{playerSymbol}</button>
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