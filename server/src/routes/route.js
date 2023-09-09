import express from 'express';
import homeController from '../controllers/homeController';
import authController from '../controllers/authController';
import timetable from '../controllers/timetableController';
import staffController from '../controllers/staffController';
import roomController from '../controllers/roomController';
import emptyroomController from '../controllers/emptyroomController';

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

  router.get('/staff', staffController.staffreadview);
  router.get('/staffread', staffController.staffread);

  router.get('/staffinsertview', staffController.staffinsertview);
  router.post('/staffinsert', staffController.staffinsert);

  router.get('/staffeditview/:id', staffController.staffeditview);
  router.get('/staffeditget/:id', staffController.getStaffById);
  router.post('/staffsave/:id', staffController.staffsave);
  router.get('/staffdelete/:id', staffController.staffdelete);

  router.get('/room', roomController.roomlistview);
  router.get('/roomlist', roomController.roomlist);
  router.post('/roomadd/:id', roomController.roomadd);
  router.post('/roomsave/:id', roomController.roomupdate);
  router.get('/roomdelete/:id', roomController.roomdelete);

  router.get('/emptyroom', emptyroomController.emptyroom);

  return app.use('/', router);
};
export default initRoute;
