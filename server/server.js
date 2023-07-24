import dotenv from 'dotenv';
import 'express-async-errors';
import express from 'express';
dotenv.config();
const app = express();

app.use(express.json());

// connectDB
import connectDB from './db/connect.js';

// authentication
import authenticateEmployee from './middleware/authentication.js';

// routers
import authRouter  from './routes/auth.js';
import postRouter  from './routes/post.js';

// error handler
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// extra packages
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit'; //The library is express-rate-limit not express-rate-limiter

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

// routes
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', authenticateEmployee, postRouter)

// routes
app.get('/', (req, res) => {
  res.send('Employee API');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error);
  }
};

start();
