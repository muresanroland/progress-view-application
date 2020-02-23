import React from 'react';

/**
 * Blueprint components
 */
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core';

/**
 * Types
 */
import User from '../../types/User';

interface NavigationProps {
  userData?: User;
}

function Navigation(props: NavigationProps) {
  return (
    <Navbar fixedToTop={true}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Progress View Application</NavbarHeading>
        <NavbarDivider />
        <img src="" alt="" />
      </NavbarGroup>
    </Navbar>
  );
}

export default Navigation;
