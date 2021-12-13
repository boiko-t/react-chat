import { APIError } from '../types/APIError';
import { User } from '../types/User';
import { BASIC_FETCH_PARAMETERS, SERVER_URL } from './common';

export const getAllUsers: () => Promise<User[]> | void = async () => {
  const res = await fetch(`${SERVER_URL}users/get-all`, {
    ...BASIC_FETCH_PARAMETERS,
    method: 'GET',
  });

  if (res.ok) {
    const data = (await res.json()) as User[];
    return data;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};
