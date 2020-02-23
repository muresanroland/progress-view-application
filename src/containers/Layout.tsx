import React, { ElementType } from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Components
 */
import Navigation from '../components/Navigation';

interface LayoutProps {
  component: ElementType;
  isLoggedIn: boolean;
  exact: boolean;
  path: string;
}

function Layout(props: LayoutProps) {
  const { component: Component, isLoggedIn, ...rest } = props;

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <>
          <Navigation />
          <Component {...matchProps} />
        </>
      )}
    />
  );
}

export default Layout;
