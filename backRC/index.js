import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';
import userRouter from './src/router/user.routes.js';
import truckerRouter from './src/router/trucker.routes.js';
import driverRouter from './src/router/driver.routes.js';
import transportRouter from './src/router/transport.routes.js';
import forhideRouter from './src/router/forhide.routes.js';
import clientRouter from './src/router/cliente.routes.js';

//dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/v1', userRouter);
app.use('/api/v1', truckerRouter);
app.use('/api/v1', driverRouter);
app.use('/api/v1', transportRouter);
app.use('/api/v1', forhideRouter);
app.use('/api/v1', clientRouter);

const PORT = process.env.PORT || 4000;



app.get('/', (req, res) => {
  res.send('Hello, Mauri1111!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: + ${PORT}`);
});