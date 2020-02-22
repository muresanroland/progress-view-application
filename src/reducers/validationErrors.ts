import { VALIDATION_ERROR, ValidationErrorType } from '../types/actions';

const initialState = {
  errorMessage: ''
};

interface returnValue {
  errorMessage: string;
}

const validationErrorReducer = (
  state = initialState,
  action: ValidationErrorType
): returnValue => {
  switch (action.type) {
    case VALIDATION_ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }
    default:
      return state;
  }
};

export default validationErrorReducer;
