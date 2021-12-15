import { checkAuthorization } from './auth.js';
import { addConversation, getUsersConversations } from '../db/conversations.js';

export const postConversation = async (req, res) => {};

export const getCurrentUserConversations = async (req, res) => {
  const currentUserId = checkAuthorization(req);

  const result = await getUsersConversations(currentUserId);
  res.status(200).json(result);
  // res.sendStatus(200);
};
