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
import User from './types/User';

interface AppProps {
  doLogin: (userData: User) => void;
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
      this.props.doLogin(JSON.parse(userData).username);
    }

    this.setState({ sessionInitialized: true });
  }

  render() {
    if (this.state.sessionInitialized) {
      return (
        <Suspense fallback={<LoadingSpinner />}>
          <Router>
            <Routes />
          </Router>
        </Suspense>
      );
    }

    return <LoadingSpinner />;
  }
}

interface LinkStateProps {}

interface LinkDispatchProps {
  doLogin: (username: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doLogin: bindActionCreators(doLogin, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
