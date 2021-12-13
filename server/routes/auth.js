import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { addUserIfNotExists, getUserById } from '../db.js';

const googleAuthClient = new OAuth2Client(process.env.CLIENT_ID);
const BASIC_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: 'none',
};

function generateAccessToken(userId) {
  return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: '86400s' });
}

const verifyAccessToken = (token) => {
  if (!token) return null;

  try {
    const result = jwt.verify(token, process.env.TOKEN_SECRET);
    return result.userId;
  } catch (e) {
    return null;
  }
};

const verifyGoogleUser = async (token) => {
  const ticket = await googleAuthClient.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();

  return { name, email, picture };
};

const setAccessTokenCookie = (res, id) => {
  const token = generateAccessToken({ userId: id });
  res.cookie('JWT', token, {
    maxAge: 86_400_000,
    ...BASIC_COOKIE_OPTIONS,
  });
};

export const getUserByToken = async (req, res) => {
  const userId = checkAuthorization(req);

  if (userId) {
    const user = await getUserById(userId);
    setAccessTokenCookie(res, userId);
    res.status(200).json(user);
  } else {
    res.sendStatus(403);
  }
};

export const addGoogleUser = async (req, res) => {
  const userId = checkAuthorization(req);

  let dbUser;
  if (userId) {
    dbUser = await getUserById(userId);
  } else {
    const googleUser = await verifyGoogleUser(req.body.token);
    dbUser = await addUserIfNotExists(googleUser);
  }

  setAccessTokenCookie(res, dbUser._id);
  res.status(201);
  res.json(dbUser);
};

export const logoutUser = async (req, res) => {
  res.clearCookie('JWT', BASIC_COOKIE_OPTIONS);
  res.sendStatus(200);
};

export const checkAuthorization = (req) => {
  const userId = verifyAccessToken(req.cookies.JWT);
  return userId || false;
};
