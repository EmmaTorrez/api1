import { Router } from 'express';
import pagoController from '../controllers/pago.controller.js';

const router = Router();


router.route('/')
.get(pagoController.getpago)
.post(pagoController.createpago);
export default router;