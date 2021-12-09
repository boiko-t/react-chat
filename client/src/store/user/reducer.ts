import { User } from '../../types/User';
import { LOG_IN_SUCCEEDED, LOG_IN_FAILED, AuthActionType } from './actions';

export interface AuthState {
  user: User;
  isLoginFailed: boolean;
  isAuthLoading: boolean;
}

const initialState: AuthState = {
  user: {} as User,
  isLoginFailed: false,
  isAuthLoading: true,
};

export const authReducer = (
  state = initialState,
  action: AuthActionType
): AuthState => {
  if (action.type === LOG_IN_SUCCEEDED) {
    return {
      user: action.payload.user as User,
      isLoginFailed: false,
      isAuthLoading: false,
    };
  }
  if (action.type === LOG_IN_FAILED) {
    return {
      user: {} as User,
      isLoginFailed: true,
      isAuthLoading: false,
    };
  }
  return state;
};
