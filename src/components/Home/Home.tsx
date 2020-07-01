import React, { lazy, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Modal from "../Modal/Modal";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import INITIALIZE from "../../graphql/initialize";

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
    const [Initialize] = useMutation(INITIALIZE);
    const [open, setOpen] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const submitNames = async ({username1, username2}) => {
        const { data } = await Initialize({ variables: { username1, username2 }});
        window.localStorage.setItem('gameId', data.initialize.game.id);
        setOpen(false);
        setIsInitialized(true);
    };


    useEffect(() => {        
        const initializeGame = () => {
            handleOpen();
        }

        if (!window.localStorage.getItem('gameId')) {
            initializeGame();
        } else {
            setIsInitialized(true);
        }
    }, [])

    return (
        <div className={classes.container}>
            {isInitialized && <Game />}
            <Modal open={open} submitNames={submitNames} />
        </div>
    );
}

export default Home;


// we need some sort of initialize function that creates 9 squares and provides them a value of ""
