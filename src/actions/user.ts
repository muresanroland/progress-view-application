import {
  LOGIN,
  LOGOUT,
  AppActionTypes,
  VALIDATION_ERROR
} from '../types/actions';
import { startLoading, stopLoading } from './loading';
import ApiService from '../services/apiService';
import { AppState } from '../store/index';
import User from '../types/User';
import { Dispatch } from 'redux';

export const loginUser = (userData: User): AppActionTypes => ({
  type: LOGIN,
  payload: userData
});

export const logoutUser = (): AppActionTypes => ({
  type: LOGOUT
});

export const loginFail = (errorMessage: string): AppActionTypes => ({
  type: VALIDATION_ERROR,
  errorMessage
});

export const doLogin = (username: string) => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    ApiService.userLogin(username)
      .then(user => {
        if (user) {
          dispatch(loginUser(user));
          dispatch(stopLoading());
        } else {
          dispatch(loginFail('Username incorrect'));
          dispatch(stopLoading());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(loginFail('Something went wrong'));
        dispatch(stopLoading());
      });
  };
};
