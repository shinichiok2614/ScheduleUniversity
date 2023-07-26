import express from 'express';
import initRoute from './config/route';

let app = express();

initRoute(app);

let port = 8080;
app.listen(port, () => {
  console.log('Backend NodeJS is running on the port: ', port);
});
