import express from 'express';
import dotenv from 'dotenv';
import userRouter from './src/router/user.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/v1', userRouter);

const PORT = process.env.PORT || 4000;
PORT


app.get('/api/v1', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: + {PORT}`);
});