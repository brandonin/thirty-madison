import gql from 'graphql-tag';

const mutation = gql`
    mutation UpdateSquare($id: String, $value: String) {
        updateOneSquare(where: { id: $id }, data: { value: $value }) {
            id
            value
            position
            createdAt
        }
    }
`;

export default mutation;
