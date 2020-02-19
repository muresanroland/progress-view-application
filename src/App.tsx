import { Button, Intent, Spinner } from '@blueprintjs/core';
import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Test</Button>
        <Spinner intent={Intent.PRIMARY} />
      </div>
    );
  }
}

export default App;
