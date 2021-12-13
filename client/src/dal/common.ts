export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const BASIC_FETCH_PARAMETERS: {
  headers: HeadersInit;
  credentials: RequestCredentials;
} = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};
