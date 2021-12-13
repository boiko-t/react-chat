import express from 'express';
import cors from 'cors';
import bp from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import setupRoutes from './routes/setup.js';

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

setupRoutes(server);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  mongoose.connect('mongodb://localhost:27017/chat').then(
    () => console.log('Database connected successfully'),
    (err) => console.log(err)
  );
});
