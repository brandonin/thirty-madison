import React, { lazy, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { useQuery } from "@apollo/client";

import BOARD_QUERY from '../../../graphql/board';

const Square = lazy(() => import('./Square'));

interface IRow {
    rows: number;
    onClick(): void;
}

const Row: React.FC<IRow> = ({ rows, onClick }) => {
    return (
        <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                {Array(rows).fill("").map((value) => (
                    <Grid key={value} item>
                        <Square value="" onClick={onClick} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

const Board: React.FC = () => {
    const [columns, setColumns] = useState(3);
    const [rows, setRows] = useState(3);
    const { data } = useQuery(BOARD_QUERY);
    console.log("dat data", data);

    const handleClick = () => {
        console.log('hello');
    }

    // change the fill to whatever existed previously
    return (
        <Grid container spacing={2}>
            {Array(columns).fill("").map((value) => (
                <Grid item key={value} xs={12}>
                    <Row rows={rows} onClick={handleClick} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Board;
