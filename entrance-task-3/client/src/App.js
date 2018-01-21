import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  toIdValue,
} from 'react-apollo';
import {
  SubscriptionClient,
  addGraphQLSubscriptions,
} from 'subscriptions-transport-ws';

import NotFound from './components/NotFound';
import Main from './components/main/_index';
import Edit from './components/edit/_index';
import store from './store/';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});
networkInterface.use([
  {
    applyMiddleware(req, next) {
      setTimeout(next, 500);
    },
  },
]);

const wsClient = new SubscriptionClient(`ws://localhost:4000/subscriptions`, {
  reconnect: true,
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const dataIdFromObject = (result) => {
  if (result.__typename) {
    if (result.id !== undefined) {
      return `${result.__typename}:${result.id}`;
    }
  }
  return null;
};

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject,
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              {false && 
                <Link to="/" className="navbar">
                React + GraphQL Tutorial
                </Link>
              }
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/edit/:eventId" component={Edit} />
                <Route path="/edit" component={Edit} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
          </Provider>
        </ApolloProvider>
    );
  }
};
export default App;
