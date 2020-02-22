import { Button, Card, Elevation, InputGroup, Intent } from '@blueprintjs/core';
import React, { Component, FormEvent } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import './style.scss';

interface Props {
  doLogin: (username: string) => void;
}

interface State {
  username: string;
}

export default class Login extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      username: ''
    };
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { username } = this.state;
    console.log(username);
    // this.props.doLogin(username);
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

// import React, { Component } from 'react'

// import { Redirect } from 'react-router-dom'

// import LoginForm from '../../components/LoginForm'

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     }
//     this.props.doLogout();
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = this.state;
//     this.props.doLogin(username, password);
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   render() {
//     const { isLoggedIn } = this.props
//     return (
//       <>
//         {
//           isLoggedIn ?
//             <Redirect to='/user-list'></Redirect> :
//             <LoginForm
//               onChange={this.handleChange}
//               onSubmit={this.handleSubmit}
//               {...this.state}>
//             </LoginForm>
//         }
//       </>
//     )
//   }
// }

// interface LoginInterface {
//   isLoggedIn: boolean;
// }

// interface SystemState {
//   login: LoginInterface;
//   userName?: string;
// }

// const mapStateToProps = (state: SystemState) => {
//   return {
//     isLoggedIn: state.login.isLoggedIn
//   };
// };

// interface LoginDispatch {
//   doLogin: (username: string) => void;
// }

// const mapDispatchToProps = (
//   dispatch: (x: Action<string>) => void
// ): LoginDispatch => {
//   return {
//     // doLogout: () => {
//     //   dispatch(userActions.logout());
//     // },
//     doLogin: username => {
//       dispatch(userActions.login(username));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
