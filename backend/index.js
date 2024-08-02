import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 1234;
// Disable header X-Powered-By: 
app.disable('x-powered-by');
// Middleware for parsing request body
app.use(express.json());
// Middleware for handle CORS - All Origins allowed (*) 
app.use(cors());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

//INDEX PAGE
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });
  

  //BOOK ROUTER
  app.use('/books', booksRoute);




//Connection DATABASE
export const connectDB = async () => {
  try {
    app.listen(port, () => {
      console.log(`listening on : ${port} ...`);
    });

    //mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

connectDB();

