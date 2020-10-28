import {AUTHENTICATION_PROCESS_SUCCESS} from '../actions/AuthenticationActions';

const AuthenticationReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case AUTHENTICATION_PROCESS_SUCCESS: {
      return {
        ...state,
        uid: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default AuthenticationReducer;
