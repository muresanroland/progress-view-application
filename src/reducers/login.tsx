import User from '../types/User';
import { LOGIN, LOGOUT, LoginActionTypes } from '../types/actions';

const initialState = {
  isLoggedIn: false
};

interface returnValue {
  isLoggedIn: boolean;
  currentUser?: User;
}

const loginReducer = (
  state = initialState,
  action: LoginActionTypes
): returnValue => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default loginReducer;
