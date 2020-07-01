import React, { lazy } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { GetGame_game_board, GetGame_game_board_squares } from "../../../graphql/__generated__/GetGame";

const Square = lazy(() => import('./Square'));

interface IBoard {
    board: GetGame_game_board;
    onSquareClick(square: GetGame_game_board_squares): void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({ 
        grid: {
            width: 660, 
            margin: "auto",
        }
    }),
);

const Board: React.FC<IBoard> = ({ board, onSquareClick }) => {
    const sortedBoard = board.squares.slice().sort((a,b) => {
        return a.position - b.position;
    })
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.grid}>
            {sortedBoard.map((square, index) => (
                <Grid item key={index} spacing={2} xs={4}>
                        <Square square={square} onClick={onSquareClick} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Board;
