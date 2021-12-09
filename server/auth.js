import { OAuth2Client } from 'google-auth-library';
// import mongoose from 'mongoose';
// import { User } from './db.js';

const client = new OAuth2Client(process.env.CLIENT_ID);

export const verifyUser = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();

  return { name, email, picture };
};
