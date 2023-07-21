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
import employeeRouter  from './routes/employee.js';

// error handler
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// extra packages

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/employees', authenticateEmployee, employeeRouter)

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
