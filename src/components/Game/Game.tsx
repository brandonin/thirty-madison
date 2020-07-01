import React, { lazy } from "react";
import { useQuery } from "@apollo/client";

import GAME_QUERY from "../../graphql/game";
import { GetGame } from '../../graphql/__generated__/GetGame';
const Board = lazy(() => import('./TicTacToe/Board'));

const Game: React.FC = () => {
    const { loading, data } = useQuery<GetGame>(GAME_QUERY, {
        variables: {
            gameId: window.localStorage.getItem("gameId"),
        }
    });

    if (loading) {
        return <div>loading...</div>
    }

    // do a switch statement based on which game it is.
    return (
        <Board board={data?.game?.board}/>
    );
}

export default Game;
