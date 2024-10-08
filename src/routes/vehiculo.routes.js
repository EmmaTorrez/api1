import { Router } from 'express';
import vehiculoController from '../controllers/vehiculo.controller.js';

const router = Router();


router.route('/')
.get(vehiculoController.getvehiculo)
.post(vehiculoController.createvehiculo);
export default router;