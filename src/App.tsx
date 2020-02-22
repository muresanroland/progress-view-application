import { BrowserRouter as Router } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import React, { Suspense } from 'react';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </Provider>
  );
}
