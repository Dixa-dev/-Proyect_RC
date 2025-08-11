import express from 'express';

import userRouter from './src/router/user.routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1', userRouter);

app.get('/api/v1', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});