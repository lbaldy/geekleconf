import {put, select, takeEvery} from 'redux-saga/effects';
import {deleteTodo, getUserTodos, saveTodo} from '../../services/TodoService';
import {
  TODO_DELETE_PROCESS_START,
  TODO_GET_PROCESS_START,
  TODO_GET_PROCESS_SUCCESS,
  TODO_SAVE_PROCESS_START,
} from '../actions/TodoActions';
import {get} from 'lodash';

function* getUid() {
  return yield select(({AuthenticationReducer}) => AuthenticationReducer.uid);
}

function* doGetTodos() {
  const uid = yield getUid();
  const todos = yield getUserTodos({uid});
  console.log(todos);
  yield put({
    type: TODO_GET_PROCESS_SUCCESS,
    payload: todos,
  });
}

function* doSaveTodos({payload}) {
  const {body, id} = payload;
  const uid = yield getUid();
  yield saveTodo({uid, body, id});
  yield doGetTodos();
}

function* doDeleteTodo({payload}) {
  const {id} = payload;
  yield deleteTodo({id});
  yield doGetTodos();
}

export default function* TodoSagas() {
  yield takeEvery(TODO_GET_PROCESS_START, doGetTodos);
  yield takeEvery(TODO_SAVE_PROCESS_START, doSaveTodos);
  yield takeEvery(TODO_DELETE_PROCESS_START, doDeleteTodo);
}
