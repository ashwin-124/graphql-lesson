import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

const httpLink = createHttpLink({
  uri: 'https://www.crwn-clothing.com',
});

const cache = new InMemoryCache();

cache.writeData({
  data: {
    cartHidden: true,
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

//	testing apollo client
apolloClient
  .query({
    query: gql`
      {
        collections {
          id
          title
          items {
            id
            name
            price
            imageUrl
          }
        }
      }
    `,
  })
  .then(apolloTestResponse =>
    console.log('Apollo Client Test Response => ', apolloTestResponse)
  );

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
