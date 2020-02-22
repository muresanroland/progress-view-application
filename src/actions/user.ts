import { LOGIN, LOGOUT, AppActionTypes } from '../types/actions';
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

export const doLogin = (username: string) => {
  return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
    dispatch(startLoading());
    ApiService.userLogin(username)
      .then(user => {
        console.log(user);
        if (user) {
          // const userData = user[0];
          // dispatch(loginUser(userData));
          dispatch(stopLoading());
        } else {
          // dispatch(failure());
          // dispatch({ type: ACTION_CONSTS.stopLoading });
        }
      })
      .catch(error => {
        console.log(error);
        // dispatch(failure());
        dispatch(stopLoading());
      });
  };
};
