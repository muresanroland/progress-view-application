import React from 'react';
import { Intent, Spinner } from '@blueprintjs/core';
export default function LoadingSpinner() {
  return <Spinner intent={Intent.PRIMARY} />;
}
