import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import getTokenOrRedirect from './helper/auth';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
})

const authLink = setContext(async (_, { headers }) => {
  const token = await getTokenOrRedirect();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
