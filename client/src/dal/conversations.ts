import { APIError } from '../types/APIError';
import { BASIC_FETCH_PARAMETERS, SERVER_URL } from './common';

export const getCurrentUserConversation = async () => {
  const res = await fetch(`${SERVER_URL}conversations/get-my`, {
    ...BASIC_FETCH_PARAMETERS,
    method: 'GET',
  });
};
