import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/DB.js';

dotenv.config();

const app = express();

await connectDB();

const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use(morgan('dev'));

app.listen(SERVER_PORT, () =>
  console.log(`Server is running on PORT ${SERVER_PORT}`),
);
