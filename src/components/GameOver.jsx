export default function GameOver({winner, onRematch}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner !== null ?  <p>{winner} won!</p> : <p>{"Hòa rồi chơi ván mới đê!"}</p>}
            {/*<p>{winner} won!</p>*/}
            <p>
                <button onClick={onRematch}>Rematch!</button>
            </p>
        </div>
    );
}