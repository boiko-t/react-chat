import { APIError } from '../types/APIError';
import { Conversation } from '../types/Chat';
import { BASIC_FETCH_PARAMETERS, SERVER_URL } from './common';

export const getConversations: () => Promise<Conversation[]> = async () => {
  const res = await fetch(`${SERVER_URL}conversations/get-my`, {
    ...BASIC_FETCH_PARAMETERS,
    method: 'GET',
  });

  if (res.ok) {
    const data = (await res.json()) as Conversation[];
    return data;
  } else {
    throw new APIError(res.status, res.statusText);
  }
};
