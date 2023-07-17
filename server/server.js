// import 'express-async-errors';

// security packages
// import xss from 'xss-clean';
// import rateLimiter from 'express-rate-limiter';
import helmet from 'helmet';
import cors from 'cors';

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
// Database connection
import connectDB from './db/connect.js'
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();