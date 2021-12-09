import express from 'express';
import cors from 'cors';
import bp from 'body-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { verifyUser } from './auth.js';
import { addUserIfNotExists, getUserById } from './db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const hostname = '127.0.0.1';
const port = 3000;

const server = express();
server.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

server.use(cookieParser());

server.use(bp.urlencoded({ extended: true }));
server.use(bp.json());

const validateJWT = (token) => {
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

server.get('/api/get-user', async (req, res) => {
  const userId = validateJWT(req.cookies.JWT);

  if (userId) {
    const user = await getUserById(userId);
    res.status(200).json(user);
  } else {
    res.sendStatus(403);
  }
});

server.post('/api/login-google', async (req, res) => {
  const userId = validateJWT(req.cookies.JWT);

  let dbUser;
  if (userId) {
    dbUser = await getUserById(userId);
  } else {
    const googleUser = await verifyUser(req.body.token);
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
});

server.get('/', (req, res) => {
  res.json('Hello');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  mongoose.connect('mongodb://localhost:27017/chat').then(
    () => console.log('Database connected successfully'),
    (err) => console.log(err)
  );
});
