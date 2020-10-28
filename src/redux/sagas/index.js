import {all, fork} from 'redux-saga/effects';
import AuthenticationSaga from './AuthenticationSagas';
import TodoSagas from './TodoSagas';

export default function* saga() {
  yield all([AuthenticationSaga(), TodoSagas()]);
}
