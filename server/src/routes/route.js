import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();
const initRoute = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/get', homeController.get);
  return app.use('/', router);
};
export default initRoute;