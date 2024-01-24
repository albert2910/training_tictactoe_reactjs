const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, indexRow) => <li key={indexRow}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
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