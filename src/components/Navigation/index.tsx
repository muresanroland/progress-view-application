import React from 'react';
import User from '../../types/User';
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core';

interface NavigationProps {
  isLoggedIn: boolean;
  userData?: User;
}

function Navigation(props: NavigationProps) {
  const { isLoggedIn } = props;
  return (
    <>
      {isLoggedIn && (
        <Navbar fixedToTop={true}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Progress View Application</NavbarHeading>
            <NavbarDivider />
            <img src="" alt="" />
          </NavbarGroup>
        </Navbar>
      )}
    </>
  );
}

export default Navigation;
