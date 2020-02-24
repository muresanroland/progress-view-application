import React from 'react';
/**
 * Blueprint components
 */
import { Intent, Spinner } from '@blueprintjs/core';
/**
 * Styles
 */
import './styles.scss';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <Spinner intent={Intent.PRIMARY} className="spinner" />;
    </div>
  );
}
