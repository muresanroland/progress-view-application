import { ERROR, ErrorType } from '../types/actions';

const initialState = {
  errorMessage: ''
};

interface returnValue {
  errorMessage: string;
}

const errorReducer = (state = initialState, action: ErrorType): returnValue => {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }
    default:
      return state;
  }
};

export default errorReducer;
