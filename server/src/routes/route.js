import express from 'express';
import homeController from '../controllers/homeController';
import authController from '../controllers/authController';
import timetable from '../controllers/timetableController';
const router = express.Router();
const initRoute = (app) => {
  router.get('/', homeController.login);
  router.get('/homepage', homeController.getHomePage);
  router.post('/login', homeController.postlogin);

  router.get('/lecturelist', homeController.lecturelist);
  router.get('/lecturelistjson', homeController.lecturelistjson);

  router.get('/editlecturer/:id', homeController.editlecturer);
  router.post('/save-lecturer/:id', homeController.savelecturer);

  router.get('/create-lecturer', homeController.createlecturer);
  router.post('/create-a-lecturer', homeController.createAlecturer);
  router.delete('/delete-lecturer/:id', homeController.deletelecturer);

  router.get('/timetablelist', timetable.timetablelist);

  router.get('/create-timetable/', timetable.createtimetable);
  router.post('/create-a-timetable/', timetable.createAtimetable);

  router.get('/edit-timetable/:id', timetable.edittimetable);
  router.post('/save-timetable/:id', timetable.savetimetable);
  router.post('/save-timetable/:id', timetable.savetimetable);

  router.get('/timetable/', timetable.timetableindex);
  router.get('/timetableindexget/', timetable.timetableindexget);
  return app.use('/', router);
};
export default initRoute;
