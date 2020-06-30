import gql from 'graphql-tag';

const query = gql`
    query user {
        user {
            id
            name
        }
    }
`;

export default query;
