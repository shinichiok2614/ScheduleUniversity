import express from 'express';
import departmentController from '../controllers/departmentController';
import verifyToken from '../middleware/auth';
import departmentlecturer from '../controllers/departmentlecturer';
import departmenttimetable from '../controllers/departmenttimetable';

const router = express.Router();
router.post('/', verifyToken, departmentController.verify);
router.post('/login', departmentController.login);
router.post('/register', departmentController.register);
// router.get('/lecturerlist',verifyToken, departmentlecturer.getlecturerlist);
router.get('/lecturerlist', departmentlecturer.getlecturerlist);
router.post('/lecturerget', departmentlecturer.getlecturer);
router.post('/lecturercreate', departmentlecturer.createlecturer);
router.post('/lectureredit', departmentlecturer.editlecturer);
router.post('/lecturerdelete', departmentlecturer.deletelecturer);

router.get('/timetablelist', departmenttimetable.gettimetablelist);
// router.post('/timetablecreate', departmenttimetable.getlecturer);
router.post('/timetableedit', departmentlecturer.getlecturer);
router.post('/timetableget', departmentlecturer.getlecturer);
router.post('/timetabledelete', departmentlecturer.getlecturer);
router.get('/test',verifyToken, departmentController.test)
export default router;
