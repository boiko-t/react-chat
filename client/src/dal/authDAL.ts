import { APIError } from '../types/APIError';
import { User } from '../types/User';
import { BASIC_FETCH_PARAMETERS, SERVER_URL } from './common';

export const getGoogleUser: (googleData: any) => Promise<User> | void = async (
  googleData
) => {
  const res = await fetch(`${SERVER_URL}auth/login-google`, {
    ...BASIC_FETCH_PARAMETERS,
    method: 'POST',
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
  });

  if (res.ok) {
    const data = (await res.json()) as User;
    return data;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};

export const getCurrentUser: () => Promise<User> | void = async () => {
  const res = await fetch(`${SERVER_URL}auth/current-user`, {
    ...BASIC_FETCH_PARAMETERS,
    method: 'GET',
  });

  if (res.ok) {
    const data = (await res.json()) as User;
    return data;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};

export const logOutCurrentUser: () => Promise<boolean> | void = async () => {
  const res = await fetch(`${SERVER_URL}auth/logout`, {
    ...BASIC_FETCH_PARAMETERS,
    method: 'POST',
  });

  if (res.ok) {
    return true;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};
