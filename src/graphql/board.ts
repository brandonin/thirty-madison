import gql from 'graphql-tag';

const query = gql`
    query board {
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
`;

export default query;
