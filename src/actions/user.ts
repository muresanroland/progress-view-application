import { Dispatch } from 'redux';
/**
 * Actions
 */
import { startLoading, stopLoading } from './loading';
import { error } from './error';
/**
 * Services
 */
import { userLoginService } from '../services';
/**
 * Types
 */
import {
  LOGIN,
  LOGOUT,
  AppActionTypes,
  LoginAction,
  LogoutAction
} from '../types/actions';
import { AppState } from '../store/index';
import User, { checkUserType } from '../types/User';

/**
 * User action creators
 */
export const loginUser = (userData: User): LoginAction => ({
  type: LOGIN,
  payload: userData
});

export const logoutUser = (): LogoutAction => ({
  type: LOGOUT
});

/**
 * User actions
 */
export const doLogin = (username: string) => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    dispatch(error(''));
    userLoginService(username)
      .then(user => {
        if (checkUserType(user)) {
          dispatch(loginUser(user));
          dispatch(stopLoading());
        } else {
          dispatch(error('Username incorrect'));
          dispatch(stopLoading());
        }
      })
      .catch(error => {
        console.error(error);
        dispatch(error('Something went wrong'));
        dispatch(stopLoading());
      });
  };
};

export const doLogout = () => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    localStorage.removeItem('currentUser');
    dispatch(error(''));
    dispatch(logoutUser());
  };
};
