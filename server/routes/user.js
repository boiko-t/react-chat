import { checkAuthorization } from './auth.js';
import { queryAllUsers } from '../db/users.js';

export const getAllUsers = async (req, res) => {
  const currentUserId = checkAuthorization(req);

  const result = await queryAllUsers(currentUserId);
  res.status(200).json(result);
};
