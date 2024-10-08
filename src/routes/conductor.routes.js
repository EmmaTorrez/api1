import { Router } from 'express';
import conductorController from '../controllers/conductor.controller.js';

const router = Router();


router.route('/')
.get(conductorController.getconductor)
.post(conductorController.createconductor);
export default router;