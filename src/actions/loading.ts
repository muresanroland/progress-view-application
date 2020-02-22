import { START_LOADING, STOP_LOADING, AppActionTypes } from '../types/actions';

export const startLoading = (): AppActionTypes => ({
  type: START_LOADING
});

export const stopLoading = (): AppActionTypes => ({
  type: STOP_LOADING
});
