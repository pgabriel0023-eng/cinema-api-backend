import 'dotenv/config';
import express from 'express';
import userRouter from './routes/userRoutes.js';
import movieRouter from './routes/movieRoutes.js';
import roomRouter from './routes/roomRoutes.js';

const app = express();

app.use('/users', userRouter);
app.use('/movies', movieRouter);
app.use('/rooms', roomRouter);

app.listen(4000, () => console.log('API de cinema está online.'));
