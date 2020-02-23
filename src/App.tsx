import { BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense, Component } from 'react';
import { AppActionTypes } from './types/actions';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/**
 * Actions
 */
import { doLogin } from './actions/user';
/**
 * Components
 */
import LoadingSpinner from './components/LoadingSpinner';
import Routes from './components/Routes';
/**
 * Types
 */

interface AppProps {
  doLogin: (username: string) => void;
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
      this.props.doLogin(currentUser.username);
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

interface LinkStateProps {}

interface LinkDispatchProps {
  doLogin: (username: string) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doLogin: bindActionCreators(doLogin, dispatch)
});
export default connect(null, mapDispatchToProps)(App);
