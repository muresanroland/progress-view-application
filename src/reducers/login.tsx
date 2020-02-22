import { ACTION_CONSTS } from '../constants';
import User from '../types/User';

interface IState {
  isLoggedIn: Boolean;
  currentUser?: User;
}

const initialState = {
  isLoggedIn: false
};

interface Action {
  type: string;
  payload: User;
}

export default function(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ACTION_CONSTS.loginSuccess: {
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload
      };
    }
    case ACTION_CONSTS.loginFailure:
    case ACTION_CONSTS.logout: {
      return initialState;
    }
    default:
      return state;
  }
}
