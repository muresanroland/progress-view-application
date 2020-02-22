import { BrowserRouter as Router } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation/index';
import React, { Suspense, Component } from 'react';
import Routes from './components/Routes';
import { connect } from 'react-redux';
import { AppState } from './store';

interface AppProps {
  isLoggedIn: boolean;
}

class App extends Component<AppProps, {}> {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <Navigation isLoggedIn={isLoggedIn} />
          <Routes />
        </Router>
      </Suspense>
    );
  }
}

interface LinkStateProps {
  isLoggedIn: boolean;
  userData?: string;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
