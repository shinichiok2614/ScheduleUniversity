import express from 'express';
import initRoute from './routes/route';
import connection from './config/connectDB';

let app = express();

initRoute(app);

connection;

let port = 8080;
app.listen(port, () => {
  console.log('Backend NodeJS is running on the port: ', port);
});
