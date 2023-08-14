import express from 'express';
import authController from '../controllers/authController';
import verifyToken from '../middleware/auth';

const router = express.Router();
router.post('/', verifyToken, authController.verify);
router.post('/login', authController.login);
router.post('/register', authController.register);
export default router;
