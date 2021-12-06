import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bp from 'body-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { verifyUser } from './auth.js';
import { addUser, getUserById } from './db.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = express();
server.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

server.use(bp.urlencoded({ extended: true }));
server.use(bp.json());

server.use(async (req, res, next) => {
  const user = await getUserById(req.session.cookie.userId);
  next();
});

server.post('/api/v1/auth/google', async (req, res) => {
  const user = await verifyUser(req.body.token);
  const dbUser = addUser(user);
  req.session.cookie.userId = dbUser._id;

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
