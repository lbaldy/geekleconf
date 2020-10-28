import {TODO_GET_PROCESS_SUCCESS} from '../actions/TodoActions';

const TodoReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case TODO_GET_PROCESS_SUCCESS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default TodoReducer;
