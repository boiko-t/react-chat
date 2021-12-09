import { APIError } from '../types/APIError';
import { User } from '../types/User';

export const getGoogleUser: (googleData: any) => Promise<User> | void = async (
  googleData
) => {
  const res = await fetch('http://127.0.0.1:3000/api/login-google', {
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
  const res = await fetch('http://127.0.0.1:3000/api/get-user', {
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
