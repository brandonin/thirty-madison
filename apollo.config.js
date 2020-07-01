module.exports = {
    client: {
        addTypename: true,
        includes: ['./src/**/*.ts'],
        excludes: ['**/__tests__/**/*'],
        service: {
            url: 'http://localhost:4000/graphql',
        },
    },
};
