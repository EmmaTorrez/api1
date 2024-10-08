import { Router } from 'express';
import miembroCanalController from '../controllers/miembroCanal.controller.js';

const router = Router();


router.route('/')
.get(miembroCanalController.getmiembroCanal)
.post(miembroCanalController.createmiembroCanal);
export default router;