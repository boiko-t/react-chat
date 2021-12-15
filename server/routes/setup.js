import { getUserByToken, addGoogleUser, logoutUser } from './auth.js';
import { getAllUsers } from './user.js';
import {
  postConversation,
  getCurrentUserConversations,
} from './conversation.js';

export default (server) => {
  // auth routes
  server.get('/auth/current-user', getUserByToken);
  server.post('/auth/logout', logoutUser);
  server.post('/auth/login-google', addGoogleUser);

  // users routes
  server.get('/users/get-all', getAllUsers);

  // conversation
  server.post('/conversations/create-new', postConversation);
  server.get('/conversations/get-my', getCurrentUserConversations);

  server.get('/', (req, res) => {
    res.json('Hello');
  });
};
