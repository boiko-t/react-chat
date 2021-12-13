import { getAllUsers } from '../../dal/userDAL';
import { APIError } from '../../types/APIError';
import { User } from '../../types/User';

export const USERS_FETCHED = 'USERS_FETCHED';

export interface UsersActionType {
  type: 'USERS_FETCHED';
  payload: {
    users: User[];
  };
}

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = (await getAllUsers()) as User[];
    dispatch(usersFetchedAction(response));
  } catch (e) {
    const error = e as APIError;
    console.log(error.message);
    dispatch(usersFetchedAction([]));
  }
};

const usersFetchedAction: (users: User[]) => UsersActionType = (users) => {
  return {
    type: USERS_FETCHED,
    payload: {
      users,
    },
  };
};
