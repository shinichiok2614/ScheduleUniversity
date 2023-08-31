import express from 'express';
import homeController from '../controllers/homeController';
import authController from '../controllers/authController';
import timetable from '../controllers/timetableController'
const router = express.Router();
const initRoute = (app) => {
  router.get('/', homeController.login);
  router.get('/homepage', homeController.getHomePage);
  router.post('/login', homeController.postlogin);
  router.get('/lecturelist', homeController.lecturelist);
  router.get('/editlecturer/:id', homeController.editlecturer);
  router.post('/save-lecturer/:id', homeController.savelecturer);
  router.get('/create-lecturer', homeController.createlecturer);
  router.post('/create-a-lecturer', homeController.createAlecturer);
  router.delete('/delete-lecturer/:id', homeController.deletelecturer);
  router.get('/homepage-timetable/', timetable.getHomePage);
  router.get('/create-timetable/', timetable.createtimetable);
  router.post('/create-a-timetable/', timetable.createAtimetable);
  return app.use('/', router);
};
export default initRoute;
