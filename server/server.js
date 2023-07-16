require('dotenv').config();
express('express-async-errors');

// security packages
// import helmet from 'helmet';
// import cors from 'cors';
// import xss from 'xss-clean';
// import rateLimiter from 'express-rate-limiter';


import express from 'express';
const app = express();

// Database connection
import connectDB from './db/connect';


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
