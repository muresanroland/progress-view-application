import { Button, Card, Elevation, InputGroup, Intent } from '@blueprintjs/core';
import React, { Component, FormEvent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.scss';
import { AppState } from '../../store/index';
import { ThunkDispatch } from 'redux-thunk';
import { AppActionTypes } from '../../types/actions';
import { doLogin } from '../../actions/user';

interface LoginProps {
  doLogin: (username: string) => void;
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
    return (
      <Card
        interactive={false}
        elevation={Elevation.FOUR}
        className="login-form-container">
        <h2>Plase Login with your username</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <InputGroup
            id="user-name"
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
    );
  }
}

interface LinkStateProps {
  isLoggedIn: boolean;
}
interface LinkDispatchProps {
  doLogin: (username: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    isLoggedIn: true
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doLogin: bindActionCreators(doLogin, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
