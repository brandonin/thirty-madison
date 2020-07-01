import React, { lazy, useCallback, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import calculateWinner from '../../utils/calculateWinner';
import GAME_QUERY from '../../graphql/game';
import { GetGame, GetGame_game_board_squares } from '../../graphql/__generated__/GetGame';
import UPDATE_SQUARE_MUTATION from '../../graphql/updateSquare';
import UPDATE_GAME_MUTATION from '../../graphql/updateGame';
import UPDATE_SCORE_MUTATION from '../../graphql/updateScore';
import RESET_MUTATION from '../../graphql/reset';
import { UpdateSquare as IUpdateSquare } from '../../graphql/__generated__/UpdateSquare';
import { UpdateGame as IUpdateGame } from '../../graphql/__generated__/UpdateGame';
import { UpdateScore as IUpdateScore } from '../../graphql/__generated__/UpdateScore';
import { Reset as IReset } from '../../graphql/__generated__/Reset';

const Board = lazy(() => import('./TicTacToe/Board'));
const GameFinished = lazy(() => import('./GameFinished'));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            backgroundColor: '#50bfbf',
            color: 'white',
            marginTop: '20px',
            marginBottom: '20px',
            width: '100px',
            fontSize: '18px',
        },
    }),
);

const Game: React.FC = () => {
    const classes = useStyles();
    const { loading, data } = useQuery<GetGame>(GAME_QUERY, {
        variables: {
            gameId: window.localStorage.getItem('gameId'),
        },
        errorPolicy: 'none',
    });

    const [UpdateSquare] = useMutation<IUpdateSquare>(UPDATE_SQUARE_MUTATION);
    const [UpdateGame] = useMutation<IUpdateGame>(UPDATE_GAME_MUTATION);
    const [UpdateScore] = useMutation<IUpdateScore>(UPDATE_SCORE_MUTATION);
    const [Reset] = useMutation<IReset>(RESET_MUTATION);

    const [winner, setWinner] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [tie, setTie] = useState(false);

    if (loading || !data?.game) {
        return <div>loading...</div>;
    }

    const { id, whosTurn, users, board } = data.game;

    const reset = useCallback(async () => {
        await Reset({
            variables: {
                boardId: board.id,
            },
        });
        setGameFinished(false);
        setTie(false);
        setWinner(false);
    }, [Reset, board.id]);

    const handleSquareClick = useCallback(
        async (square: GetGame_game_board_squares) => {
            if (square.value) {
                alert('That box has already been taken!');
                return;
            }

            await UpdateSquare({
                variables: {
                    id: square.id,
                    value: whosTurn?.symbol,
                },
            });

            const {
                data: { updateOneGame },
            } = await UpdateGame({
                variables: {
                    id,
                    userId: whosTurn?.id === users[0].id ? users[1].id : users[0].id,
                },
            });

            const sortedSquares = updateOneGame.board.squares.slice().sort((a, b) => a.position - b.position);
            const isWinner = calculateWinner(sortedSquares, whosTurn?.symbol);

            if (isWinner) {
                const winner = whosTurn?.id === users[0].id ? users[1] : users[0];

                await UpdateScore({
                    variables: {
                        id: winner.score.id,
                        value: winner.score.value + 1,
                    },
                });
                setWinner(true);
                setGameFinished(true);
            }

            sortedSquares.some((square, index) => {
                if (square.value === '') {
                    return true;
                } else if (index === 8) {
                    setTie(true);
                    setGameFinished(true);
                }
                return false;
            });
        },
        [UpdateGame, UpdateScore, UpdateSquare, id, users, whosTurn],
    );

    // do a switch statement based on which game it is.
    return (
        <>
            <Grid container alignContent="center" justify="space-evenly" spacing={2}>
                {/* <Grid item spacing={2} xs={12}> */}
                <Button className={classes.button} onClick={reset}>
                    Reset
                </Button>
                {/* </Grid> */}
            </Grid>
            <Board board={data?.game?.board} onSquareClick={handleSquareClick} />
            <GameFinished open={gameFinished} tie={tie} winner={winner} reset={reset} />
        </>
    );
};

export default Game;
