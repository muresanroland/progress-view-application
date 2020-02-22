import { combineReducers } from 'redux';

import loginReducer from './login';
import validationErrorReducer from './validationErrors';

const rootReducer = combineReducers({
  login: loginReducer,
  validationErrors: validationErrorReducer
});

export default rootReducer;
