import { logIn } from '../../services/authService';

export const LOG_IN_SUCCEEDED = 'LOG_IN_SUCCEEDED';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const LOG_OUT_REQUESTED = 'LOG_OUT_REQUESTED';

export const requestLogIn = (data) => async (dispatch) => {
  try {
    const response = await logIn(data);
    dispatch(logInSuccessful(response));
  } catch (error) {
    console.log(error);
    dispatch(logInFailed(error));
  }
};

const logInSuccessful = ({ name, email, picture }) => {
  return {
    type: LOG_IN_SUCCEEDED,
    payload: {
      name,
      email,
      picture,
    },
  };
};

const logInFailed = (error) => {
  return {
    type: LOG_IN_FAILED,
    payload: {
      error,
    },
  };
};

export const requestLogOut = () => {
  return {
    type: LOG_OUT_REQUESTED,
  };
};
