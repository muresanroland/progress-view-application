import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('../../pages/Login'));
const Dashboard = lazy(() => import('../../pages/Dashboard'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/login/" component={Login} />
      <Route exact path="/" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
