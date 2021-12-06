import { LOG_IN_SUCCEEDED, LOG_IN_FAILED } from './actions';

export const reducer = (state = {}, action) => {
  if (action.type === LOG_IN_SUCCEEDED) {
    return {
      name: action.payload.name,
      email: action.payload.email,
      picture: action.payload.picture,
    };
  }
  if (action.type === LOG_IN_FAILED) {
    return {
      username: '',
      email: '',
      avatar: '',
    };
  }
  return state;
};

export default reducer;
