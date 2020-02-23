import { combineReducers } from 'redux';
/**
 * Reducers
 */
import loginReducer from './login';
import errorReducer from './error';
import pipelineReducer from './pipeline';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  login: loginReducer,
  error: errorReducer,
  pipeline: pipelineReducer,
  loading: loadingReducer
});

export default rootReducer;
