import { User } from '../../types/User';
import { UsersActionType, USERS_FETCHED } from './actions';

export type UsersState = User[];

export const usersReducer = (
  state = [] as UsersState,
  action: UsersActionType
): UsersState => {
  if (action.type === USERS_FETCHED) {
    return [...action.payload.users];
  }

  return state;
};
