import React from 'react';
/**
 * Blueprint components
 */
import { Intent, Spinner } from '@blueprintjs/core';

export default function LoadingSpinner() {
  return <Spinner intent={Intent.PRIMARY} />;
}
