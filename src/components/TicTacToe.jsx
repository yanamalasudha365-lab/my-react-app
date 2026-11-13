
import React, { useState } from "react";
import "../styles/TicTacToe.css";

function TicTacToe() {

    const [board, setBoard] = useState([
        "", "", "",
        "", "", "",
        "", "", ""
    ]);

    const [isXTurn, setIsXTurn] = useState(true);

    const [winner, setWinner] = useState(null);

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleClick(index) {

        if (board[index] !== "" || winner) {
            return;
        }

        const newBoard = [...board];

        newBoard[index] = isXTurn ? "X" : "O";

        setBoard(newBoard);

        // Check winner
        for (let pattern of winningPatterns) {

            const [a, b, c] = pattern;

            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[b] === newBoard[c]
            ) {
                setWinner(newBoard[a]);
                return;
            }
        }

        // Check draw
        if (newBoard.every(cell => cell !== "")) {
            setWinner("Draw");
            return;
        }

        setIsXTurn(!isXTurn);
    }

    function restartGame() {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setIsXTurn(true);
        setWinner(null);
    }

    return (
        <div className="game-container">

            <h1>XO Game</h1>

            <h2>
                {winner
                    ? winner === "Draw"
                        ? "It's a Draw!"
                        : `Winner: ${winner}`
                    : `Player ${isXTurn ? "X" : "O"}'s Turn`}
            </h2>

            <div className="board">

                {board.map((value, index) => (
                    <button
                        key={index}
                        className="cell"
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                ))}

            </div>

            <button className="restart-btn" onClick={restartGame}>
                Restart Game
            </button>

        </div>
    );
}

export default TicTacToe;
