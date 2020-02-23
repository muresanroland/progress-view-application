import User from '../types/User';
import { LOGIN, LOGOUT, LoginActionType } from '../types/actions';

const initialState = {
  isLoggedIn: false,
  currentUser: {
    username: '',
    avatar: ''
  }
};

interface returnValue {
  isLoggedIn: boolean;
  currentUser: User;
}

const loginReducer = (state = initialState, action: LoginActionType): returnValue => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload
      };
    }
    case LOGOUT: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
