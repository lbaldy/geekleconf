import {all, takeEvery, put} from 'redux-saga/effects';
import {loginWithEmailAndPassword} from '../../services/AuthenticationService';
import {
  AUTHENTICATION_PROCESS_START,
  AUTHENTICATION_PROCESS_SUCCESS,
} from '../actions/AuthenticationActions';

function* doAuthentication({payload}) {
  const {email, password} = payload;
  const {user} = yield loginWithEmailAndPassword({email, password});
  const {uid} = user;
  yield put({
    type: AUTHENTICATION_PROCESS_SUCCESS,
    payload: uid,
  });
}

export default function* AuthenticationSagas() {
  yield takeEvery(AUTHENTICATION_PROCESS_START, doAuthentication);
}
