import { Link, Redirect } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
/**
 * Blueprint components
 */
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  Intent,
  NavbarDivider,
  Classes
} from '@blueprintjs/core';
/**
 * Styles
 */
import './styles.scss';
/**
 * Types
 */
import { AppActionTypes } from '../../types/actions';
import { AppState } from '../../store';
import User from '../../types/User';
/**
 * Actions
 */
import { doLogout } from '../../actions/user';

interface NavigationProps {
  userData: User;
  doLogout: () => void;
  isLoggedIn: boolean;
}

function Navigation(props: NavigationProps) {
  return (
    <>
      {props.isLoggedIn ? (
        <Navbar fixedToTop={true}>
          <div className="navigation">
            <NavbarGroup align={Alignment.LEFT} className="navigation">
              <NavbarHeading>
                <Link to="/">Progress View Application</Link>
              </NavbarHeading>
              <NavbarDivider />
              <Link to="/tasks">
                <Button icon="widget-header" className={Classes.MINIMAL}>
                  Tasks
                </Button>
              </Link>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
              <Button
                icon="log-out"
                className="float-right"
                intent={Intent.WARNING}
                onClick={() => props.doLogout()}
                text="Logout"
              />
            </NavbarGroup>
          </div>
        </Navbar>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

interface LinkStateProps {
  userData: User;
  isLoggedIn: boolean;
}

interface LinkDispatchProps {
  doLogout: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    userData: state.login.currentUser,
    isLoggedIn: state.login.isLoggedIn
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionTypes>
): LinkDispatchProps => ({
  doLogout: bindActionCreators(doLogout, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
