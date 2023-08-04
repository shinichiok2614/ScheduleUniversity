import express from 'express';
import initRoute from './routes/route';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';

let app = express();
app.use(express.json())
connectDB();

initRoute(app);

app.use('/auth', authRoute);

let port = 8080;
app.listen(port, () => {
  console.log('Backend NodeJS is running on the port: ', port);
});
