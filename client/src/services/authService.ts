import { APIError } from '../types/APIError';
import { User } from '../types/User';

const SERVER_URL = 'http://127.0.0.1:3000/';

export const getGoogleUser: (googleData: any) => Promise<User> | void = async (
  googleData
) => {
  const res = await fetch(`${SERVER_URL}api/login-google`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    const data = (await res.json()) as User;
    return data;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};

export const getCurrentUser: () => Promise<User> | void = async () => {
  const res = await fetch(`${SERVER_URL}api/get-user`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    const data = (await res.json()) as User;
    return data;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};

export const logOutCurrentUser: () => Promise<boolean> | void = async () => {
  const res = await fetch(`${SERVER_URL}api/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    return true;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};
