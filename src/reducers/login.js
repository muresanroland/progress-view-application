import { ACTION_CONSTS } from "../const";

let currentUser = JSON.parse(localStorage.getItem('currentUser'));

const initialState = currentUser ? {
  isLoggedIn: true,
  currentUser: currentUser,
} : {
    isLoggedIn: false,
    currentUser: {},
  };

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_CONSTS.loginSuccess:
    case ACTION_CONSTS.updateLoggedInUserSuccess: {
      return {
        isLoggedIn: true,
        currentUser: action.user,
      }
    }
    case ACTION_CONSTS.loginFailure:
    case ACTION_CONSTS.logout: {
      return initialState
    }
    default:
      return state;
  }
}
