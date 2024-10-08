import { Router } from 'express';
import canalComunicacionController from '../controllers/canalComunicacion.controller.js';

const router = Router();


router.route('/')
.get(canalComunicacionController.getcanalComunicacion)
.post(canalComunicacionController.createcanalComunicacion);
export default router;