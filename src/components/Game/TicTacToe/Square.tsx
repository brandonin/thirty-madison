import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            height: 200,
            width: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: theme.palette.primary.main,
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
    value: string;
    onClick(): void;
}

// Take in the current user and fill it with either an X or an O.
const Square: React.FC<ISquare> = ({ value, onClick }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} onClick={onClick} children={<ClickedComponent value={value} />} />
    );
}
export default Square;
