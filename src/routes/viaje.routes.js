import { Router } from 'express';
import viajeController from '../controllers/viaje.controller.js';

const router = Router();


router.route('/')
.get(viajeController.getviaje)
.post(viajeController.createviaje);
export default router;