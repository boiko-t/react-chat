import { getGoogleUser, getCurrentUser } from '../../services/authService';
import { APIError } from '../../types/APIError';
import { User } from '../../types/User';

export const LOG_IN_SUCCEEDED = 'LOG_IN_SUCCEEDED';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const LOG_OUT_REQUESTED = 'LOG_OUT_REQUESTED';

export interface AuthActionType {
  type: 'LOG_IN_SUCCEEDED' | 'LOG_IN_FAILED';
  payload: {
    user?: User;
    statusCode?: number;
  };
}

export const logInGoogle = (data) => async (dispatch) => {
  try {
    const response = (await getGoogleUser(data)) as User;
    dispatch(logInSuccessful(response));
  } catch (e) {
    const error = e as APIError;
    console.log(error.message);
    dispatch(logInFailed(error.status));
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = (await getCurrentUser()) as User;
    dispatch(logInSuccessful(response));
  } catch (e) {
    const error = e as APIError;
    console.log(error.message);
    dispatch(logInFailed(error.status));
  }
};

const logInSuccessful: (user: User) => AuthActionType = (user) => {
  return {
    type: LOG_IN_SUCCEEDED,
    payload: {
      user,
    },
  };
};

const logInFailed: (statusCode: number) => AuthActionType = (statusCode) => {
  return {
    type: LOG_IN_FAILED,
    payload: {
      statusCode,
    },
  };
};

export const requestLogOut = () => {
  return {
    type: LOG_OUT_REQUESTED,
  };
};
