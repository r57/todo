import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import LoginComponent from './components/login'
import UserAuthServiceContainer, {
  UserAuthService,
  UserAuthServiceModel,
} from './modules/services/user-auth.service'

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4001/'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

class IsLoggedIn extends Component {
  render() {
    return (
      <UserAuthServiceContainer>
          <UserAuthService.Consumer>
              {(state: UserAuthServiceModel) => {
                  if (state.state) {
                      return <App />
                  }
                  return <LoginComponent />
              }}
          </UserAuthService.Consumer>
      </UserAuthServiceContainer>
    )
  }
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
