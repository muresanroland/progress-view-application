import { combineReducers } from 'redux';
/**
 * Reducers
 */
import loginReducer from './login';
import errorReducer from './error';
import pipelineReducer from './pipeline';
import loadingReducer from './loading';
import taskReducer from './task';

const rootReducer = combineReducers({
  login: loginReducer,
  error: errorReducer,
  pipeline: pipelineReducer,
  loading: loadingReducer,
  task: taskReducer
});

export default rootReducer;
