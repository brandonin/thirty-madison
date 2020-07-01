import React, { MouseEvent } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { GetGame_game_board_squares } from "../../../graphql/__generated__/GetGame";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            height: 200,
            width: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: theme.palette.primary.main,
            cursor: "pointer",
        }
    }),
);

interface IClickedComponent {
    value: string
}

const ClickedComponent: React.FC<IClickedComponent> = ({ value }) => {
    return (
        <Typography variant="h1" align="center">{value}</Typography>
    )
}

interface ISquare {
    square: GetGame_game_board_squares;
    onClick(square: GetGame_game_board_squares): void;
}

// Take in the current user and fill it with either an X or an O.
const Square: React.FC<ISquare> = ({ square, onClick }) => {
    const classes = useStyles();
    
    const handleClick = () => {
        onClick(square);
    }
    return (
        <Paper className={classes.paper} onClick={handleClick} children={<ClickedComponent value={square?.value} />} />
    );
}
export default Square;
