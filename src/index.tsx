import { Button, Intent, Spinner } from '@blueprintjs/core';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';

function App() {
  console.log(Intent);
  return (
    <div className="App">
      <Button>Test</Button>
      <Spinner intent={Intent.PRIMARY} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
