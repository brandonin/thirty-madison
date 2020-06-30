import React, { lazy } from "react";
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const Game = lazy(() => import('../Game/Game'));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: "10%",
        },
    }),
);

const Home: React.FC = () => {
    const classes = useStyles();

    const initializeGame = () => {
        fetch('./netlify/functions/startGame')
            .then(value => {
                console.log(value)
            });
    }

    return (
        <div className={classes.container}>
            <Game />
        </div>
    );
}

export default Home;


// we need some sort of initialize function that creates 9 squares and provides them a value of ""
