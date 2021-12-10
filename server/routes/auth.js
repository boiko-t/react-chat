import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { addUserIfNotExists, getUserById } from '../db.js';

const client = new OAuth2Client(process.env.CLIENT_ID);

const verifyAccessToken = (token) => {
  if (!token) return null;

  try {
    const result = jwt.verify(token, process.env.TOKEN_SECRET);
    return result.username;
  } catch (e) {
    return null;
  }
};

function generateAccessToken(userId) {
  return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: '86400s' });
}

const verifyGoogleUser = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();

  return { name, email, picture };
};

export const getUserByToken = async (req, res) => {
  const userId = verifyAccessToken(req.cookies.JWT);

  if (userId) {
    const user = await getUserById(userId);
    res.status(200).json(user);
  } else {
    res.sendStatus(403);
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie('JWT', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  res.sendStatus(200);
};

export const addGoogleUser = async (req, res) => {
  const userId = verifyAccessToken(req.cookies.JWT);

  let dbUser;
  if (userId) {
    dbUser = await getUserById(userId);
  } else {
    const googleUser = await verifyGoogleUser(req.body.token);
    dbUser = await addUserIfNotExists(googleUser);
  }

  const token = generateAccessToken({ username: dbUser._id });

  res.cookie('JWT', token, {
    maxAge: 86_400_000,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.status(201);
  res.json(dbUser);
};
