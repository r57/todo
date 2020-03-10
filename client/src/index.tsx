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

ReactDOM.render(<IsLoggedIn />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
