import express from 'express';
import initRoute from './routes/route';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';
import cors from 'cors';

let app = express();
app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

connectDB();

initRoute(app);

app.use('/auth', authRoute);

let port = 8080;
app.listen(port, () => {
  console.log('Backend NodeJS is running on the port: ', port);
});
