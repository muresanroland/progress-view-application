import { Error, ERROR } from '../types/actions';

export const error = (errorMessage: string): Error => ({
  type: ERROR,
  errorMessage
});
