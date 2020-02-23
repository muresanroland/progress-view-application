import { LoadingActionType, START_LOADING, STOP_LOADING } from '../types/actions';

const initialState = {
  isLoading: false
};

interface returnValue {
  isLoading: boolean;
}

const loadingReducer = (state = initialState, action: LoadingActionType): returnValue => {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default loadingReducer;
