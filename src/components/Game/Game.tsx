import React, { lazy } from "react";

const Board = lazy(() => import('./TicTacToe/Board'));

const Game: React.FC = () => {
    // do a switch statement based on which game it is.
    return (
        <Board />
    );
}

export default Game;
