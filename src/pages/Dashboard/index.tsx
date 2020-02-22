import React, { Component } from 'react';
import CheckLoginContainer from '../../containers/CheckLoginContainer';

export class Dashboard extends Component {
  render() {
    return (
      <CheckLoginContainer>
        <div>
          <h1>This is the dashboard component</h1>
        </div>
      </CheckLoginContainer>
    );
  }
}

export default Dashboard;
