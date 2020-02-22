import React, { ReactNode, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../store/index';

interface CheckLoginProps {
  isLoggedIn: boolean;
  children: ReactNode;
}

class CheckLoginContainer extends Component<CheckLoginProps> {
  render() {
    const { isLoggedIn, children } = this.props;
    return isLoggedIn ? <>{children}</> : <Redirect to="/login" />;
  }
}

interface LinkStateProps {
  isLoggedIn: boolean;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps)(CheckLoginContainer);
