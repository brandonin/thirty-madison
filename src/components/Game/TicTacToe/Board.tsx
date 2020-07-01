import React, { lazy, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { GetGame_game_board } from "../../../graphql/__generated__/GetGame";

const Square = lazy(() => import('./Square'));

interface IBoard {
    board: GetGame_game_board;
}

interface IRow {
    rows: number;
    onClick(): void;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({ 
        grid: {
            width: 660, 
            margin: "auto",
        }
    }),
);


const Board: React.FC<IBoard> = ({ board }) => {
    const classes = useStyles();

    const [columns, setColumns] = useState(3);
    const [rows, setRows] = useState(3);
    console.log('board', board);
    const handleClick = () => {
        console.log('hello');
    }

    // change the fill to whatever existed previously
    return (
        <Grid container spacing={2} className={classes.grid}>
            {board.squares.map((value, index) => (
                <Grid item key={index} spacing={2} xs={4}>
                        <Square value="" onClick={handleClick} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Board;
