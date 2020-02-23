import React, { Component, FormEvent } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
/**
 * Bluepring components
 */
import { Button, Card, Elevation, InputGroup, Intent } from '@blueprintjs/core';
/**
 * Actions
 */
import { AppActionTypes } from '../../types/actions';
import { doLogin } from '../../actions/user';
/**
 * Types
 */
import { AppState } from '../../store';
/**
 * Styles
 */
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

  private handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { username } = this.state;
    this.props.doLogin(username);
  };

  private handleChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      username: e.currentTarget.value
    });
  };

  public render() {
    const { username } = this.state;
    const { isLoggedIn, errorMessage } = this.props;
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
              {errorMessage && <span className="form-error">{errorMessage}</span>}
              <InputGroup
                id="user-name"
                className={errorMessage && `bp3-intent-${Intent.DANGER}`}
                placeholder="Please Enter your user name"
                value={username}
                onChange={this.handleChange}
                required={true}
              />
              <Button intent={Intent.PRIMARY} text="Login" large={true} type="submit" />
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
    errorMessage: state.error.errorMessage
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doLogin: bindActionCreators(doLogin, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
