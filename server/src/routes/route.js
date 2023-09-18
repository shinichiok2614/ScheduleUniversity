import express from 'express';
import homeController from '../controllers/homeController';
import authController from '../controllers/authController';
import timetable from '../controllers/timetableController';
import staffController from '../controllers/staffController';
import roomController from '../controllers/roomController';
import emptyroomController from '../controllers/emptyroomController';
import departmentController from '../controllers/departmentController';
import verifyToken from '../middleware/auth';

const router = express.Router();
const initRoute = (app) => {
  router.get('/login', homeController.login);
  router.get('/homepage', homeController.getHomePage);
  router.post('/loginpost', homeController.postlogin);

  router.get('/lecturelist', homeController.lecturelist);
  router.get('/lecturelistjson', homeController.lecturelistjson);

  router.get('/editlecturer/:id', homeController.editlecturer);
  router.post('/save-lecturer/:id', verifyToken, homeController.savelecturer);

  router.get('/create-lecturer', homeController.createlecturer);
  router.post('/create-a-lecturer', verifyToken, homeController.createAlecturer);
  router.post('/delete-lecturer/:id', verifyToken, homeController.deletelecturer);

  router.get('/timetablelist', timetable.timetablelist);

  router.get('/create-timetable/', timetable.createtimetable);
  router.post('/create-a-timetable/', verifyToken, timetable.createAtimetable);

  router.get('/edit-timetable/:id', timetable.edittimetable);
  router.post('/save-timetable/:id', verifyToken, timetable.savetimetable);

  router.get('/', timetable.timetableindex);
  router.get('/timetableindexget/', timetable.timetableindexget);

  router.get('/staff', staffController.staffreadview);
  router.get('/staffread', staffController.staffread);

  router.get('/staffinsertview', staffController.staffinsertview);
  router.post('/staffinsert', verifyToken, staffController.staffinsert);

  router.get('/staffeditview/:id', staffController.staffeditview);
  router.get('/staffeditget/:id', staffController.getStaffById);
  router.post('/staffsave/:id', verifyToken, staffController.staffsave);
  router.post('/staffdelete/:id', verifyToken, staffController.staffdelete);

  router.get('/room', roomController.roomlistview);
  router.get('/roomlist', roomController.roomlist);
  router.post('/roomadd/:id', roomController.roomadd);
  router.post('/roomsave/:id', roomController.roomupdate);
  router.get('/roomdelete/:id', roomController.roomdelete);

  router.get('/emptyroom', emptyroomController.emptyroom);

  router.get('/departmentlist', departmentController.departmentlist);

  router.get('/classeslist', departmentController.classeslist);

  return app.use('/', router);
};
export default initRoute;
