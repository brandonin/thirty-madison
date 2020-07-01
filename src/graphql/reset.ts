import gql from 'graphql-tag';

const mutation = gql`
    mutation Reset($boardId: String) {
        reset(boardId: $boardId) {
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
