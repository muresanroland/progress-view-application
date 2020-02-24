import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../../containers/Layout';
import { AppState } from '../../store';

const Login = lazy(() => import('../../pages/Login'));
const Dashboard = lazy(() => import('../../pages/Dashboard'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const Tasks = lazy(() => import('../../pages/Tasks'));

function Router(props: { isLoggedIn: boolean }) {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Layout exact path="/" isLoggedIn={props.isLoggedIn} component={Dashboard} />
      <Layout exact path="/tasks" isLoggedIn={props.isLoggedIn} component={Tasks} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
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

export default connect(mapStateToProps)(Router);
