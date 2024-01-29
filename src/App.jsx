import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
function deriveActivePlayer(turns) {
    let currentPlayer = "X";
    if (turns.length > 0 && turns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}
function App() {

    const [turn, setTurn] = useState([]);
    const activePlayer = deriveActivePlayer(turn);
    function handleSelectSquare(rowIndex, colIndex) {

        setTurn((preTurn) => {
            const currentPlayer = deriveActivePlayer(preTurn);

            const updatedTurn = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...preTurn];
            return updatedTurn;

        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
                    <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} turns={turn}/>
            </div>
            <Log turns={turn}/>
        </main>
    )

}

export default App
