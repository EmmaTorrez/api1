import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();


router.route('/')
.get(usersController.getUsers)
.post(usersController.createUser)
.get(usersController.getUser)
export default router;