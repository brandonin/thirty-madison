import gql from 'graphql-tag';

const query = gql`
    query GetGame($gameId: String!) {
        game(where: { id: $gameId }) {
            id
            users {
                id
                name
            }
            board {
                id
                squares {
                    id
                    value
                    xPosition
                    yPosition
                }
            }
        }
    }
`;

export default query;
