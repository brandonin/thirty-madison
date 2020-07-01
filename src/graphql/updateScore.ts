import gql from 'graphql-tag';

const mutation = gql`
    mutation UpdateScore($id: String, $value: Int) {
        updateOneScore(where: { id: $id }, data: { value: $value }) {
            id
            value
        }
    }
`;

export default mutation;
