import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { ApolloClient, ApolloProvider, HttpLink, ApolloLink, Observable, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';

import './App.css';
import history from "./utils/history";

const cache = new InMemoryCache();

const Home = lazy(() => import('./components/Home/Home'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));

const requestLink = new ApolloLink(
    (operation, forward) =>
        new Observable(observer => {
            let handle;
            Promise.resolve(operation)
                .then(() => {
                    handle = forward(operation).subscribe({
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer),
                    });
                })
                .catch(observer.error.bind(observer));

            return () => {
                if (handle) {
                    handle.unsubscribe();
                }
            };
        }),
);

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
                );
            }

            if (networkError) {
                console.log(`[Network error]: ${networkError}`);
            }
        }),
        requestLink,
        new HttpLink({
            uri: `${process.env.API_URL}/graphql`,
            credentials: 'same-origin',
        }),
    ]),
    cache,
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
    }),
);

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <ApolloProvider client={client}>
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <header>
                        <Navbar />
                    </header>
                    <div className={classes.drawerHeader} />
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Suspense>
            </Router>
        </ApolloProvider>
    );
}

export default App;
