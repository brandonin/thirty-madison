import gql from 'graphql-tag';

const mutation = gql`
    mutation Initialize($username1: String!, $username2: String!) {
        initialize(username1: $username1, username2: $username2) {
            game {
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
                        position
                        createdAt
                    }
                }
            }
        }
    }
`;

export default mutation;
