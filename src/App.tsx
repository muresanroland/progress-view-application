import { BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense, Component } from 'react';
import { AppActionTypes } from './types/actions';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/**
 * Actions
 */
import { doLogin, loginUser } from './actions/user';
/**
 * Components
 */
import LoadingSpinner from './components/LoadingSpinner';
import Routes from './components/Routes';
/**
 * Types
 */
import User from './types/User';

interface AppProps {
  loginUser: (userData: User) => void;
}
interface AppState {
  sessionInitialized: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sessionInitialized: false
    };
  }

  componentDidMount() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const currentUser = JSON.parse(userData);
      this.props.loginUser(currentUser);
    }

    this.setState({ sessionInitialized: true });
  }

  render() {
    const { sessionInitialized } = this.state;

    return (
      <>
        {sessionInitialized ? (
          <Suspense fallback={<LoadingSpinner />}>
            <Router>
              <Routes />
            </Router>
          </Suspense>
        ) : (
          <LoadingSpinner />
        )}
      </>
    );
  }
}

export default connect(null, { loginUser })(App);
