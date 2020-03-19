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
      <ContentComponent className="center">
        <Container component="main" maxWidth="xs">
          <div className='login-form'>
            {!this.state.signUp ? (
              <UserAuthService.Consumer>
              {state => (
                <div className="fade-in">
                  <div className="login-label-box">
                    <Avatar className="avatar">
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" align="center">
                      Login
                    </Typography>
                  </div>
                  <form
                    onSubmit={evt => {
                      evt.preventDefault()
                      state.setState(this.checkEmail())
                    }}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={val => this.setState({ email: val.target.value })}
                      value={this.state.email}
                    />
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={this.state.password}
                      onChange={val =>
                        this.setState({ password: val.target.value })
                      }
                    />
                    <Button 
                      type='submit'
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Submit
                    </Button>
                    <Link 
                      href="#"
                      variant="body2"
                      onClick={() => {
                        this.showSignUp()
                      }}
                    >
                      Don't have an account?
                    </Link>
                  </form>
                </div>
              )}
              </UserAuthService.Consumer>
            )
            : (
              <div className="fade-in">
                <SignUp />
                <Grid container justify="center">
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => {
                        this.showSignUp()
                      }}
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </div>
            )}
          </div>
        </Container>
      </ContentComponent>
    );
  }
}
