import gql from 'graphql-tag';

const mutation = gql`
    mutation UpdateGame($id: String, $userId: String) {
        updateOneGame(where: { id: $id }, data: { whosTurn: { connect: { id: $userId } } }) {
            id
            whosTurn {
                id
                name
                symbol
            }
            board {
                id
                squares {
                    id
                    value
                    position
                    createdAt
                }
            }
        }
    }
`;

export default mutation;
