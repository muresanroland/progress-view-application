import {
  Button,
  Card,
  Elevation,
  InputGroup,
  Intent,
  Label
} from '@blueprintjs/core';
import { AppActionTypes } from '../../types/actions';
import React, { Component, FormEvent } from 'react';
import { doLogin } from '../../actions/user';
import { AppState } from '../../store/index';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import './style.scss';

interface LoginProps {
  doLogin: (username: string) => void;
  isLoggedIn: boolean;
  errorMessage?: string;
}

interface LoginState {
  username: string;
}

class Login extends Component<LoginProps, LoginState> {
  constructor(props: Readonly<LoginProps>) {
    super(props);

    this.state = {
      username: ''
    };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { username } = this.state;
    console.log(username);
    this.props.doLogin(username);
  };

  handleChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      username: e.currentTarget.value
    });
  };

  render() {
    const { username } = this.state;
    const { isLoggedIn, errorMessage } = this.props;
    console.log(isLoggedIn);
    return (
      <>
        {isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Card
            interactive={false}
            elevation={Elevation.FOUR}
            className="login-form-container">
            <h2>Plase Login with your username</h2>
            <form onSubmit={this.handleSubmit} className="login-form">
              {errorMessage && (
                <span className="form-error">{errorMessage}</span>
              )}
              <InputGroup
                id="user-name"
                className={errorMessage && `bp3-intent-danger`}
                placeholder="Please Enter your user name"
                value={username}
                onChange={this.handleChange}
                required={true}
              />
              <Button
                intent={Intent.PRIMARY}
                text="Login"
                large={true}
                type="submit"
              />
            </form>
          </Card>
        )}
      </>
    );
  }
}

interface LinkStateProps {
  isLoggedIn: boolean;
  errorMessage?: string;
}
interface LinkDispatchProps {
  doLogin: (username: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    errorMessage: state.validationErrors.errorMessage
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doLogin: bindActionCreators(doLogin, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
