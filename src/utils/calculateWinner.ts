import { GetGame_game_board_squares } from '../graphql/__generated__/GetGame';

const calculateWinner = (squares: GetGame_game_board_squares[], symbol: string): boolean     => {
    // Check all possible winning combinations 
    const matches = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],    // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8],    // vertical
        [0, 4, 8], [2, 4, 6],               // diagonal
    ];

    for (let i = 0; i < 8; i++) {
        if(
            squares[matches[i][0]]?.value === symbol &&
            squares[matches[i][1]]?.value === symbol &&
            squares[matches[i][2]]?.value === symbol
        ) {
            return true;
        }
    }
    return false;
}

export default calculateWinner;
