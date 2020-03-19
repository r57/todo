import React, { Component } from 'react'
import ContentComponent from '../content/content.component'
import SignUp from './signUp/signUp'
import { UserAuthService } from '../../modules/services/user-auth.service'
import './login.scss'

import { TextField, Button, Avatar } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

interface State {
  email: string,
  password: string,
  signUp: boolean
}

export default class LoginComponent extends Component<{}, State> {

  initialState() {
    this.setState({
      email: 'dude@gmail.com',
      password: '1234',
      signUp: false
    })
  }

  componentWillMount() {
    this.initialState()
  }

  checkEmail() {
    if (this.state.email !== 'dude@gmail.com' || this.state.password !== '1234') {
      alert('Wrong password dude/et');
    }
    return this.state.email === 'dude@gmail.com' && this.state.password === '1234';
  }

  showSignUp() {
    this.setState({signUp: !this.state.signUp})
  }

  render() {
    return (
      <ContentComponent className='center'>
        <div className='login-form'>
          <UserAuthService.Consumer>
            {state => (
              <form
                onSubmit={evt => {
                  evt.preventDefault();
                  state.setState(this.checkEmail());
                }}>
                <TextField onChange={val => this.setState({ email: val.target.value })} value={this.state.email} label='Email' />
                <TextField type='password' value={this.state.password} onChange={val => this.setState({ password: val.target.value })} label='Password' />
                <Button type='submit'>Submit</Button>
              </form>
            )}
          </div>
        </Container>
      </ContentComponent>
    );
  }
}
