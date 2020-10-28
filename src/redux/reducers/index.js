import AuthenticationReducer from './AuthenticationReducer';
import TodoReducer from './TodoReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  AuthenticationReducer,
  TodoReducer,
});
