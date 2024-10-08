
import express from 'express';
import morgan from 'morgan';


const app = express();

//import router
import usersRoutes from './routes/users.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import canalComunicacionRoutes from './routes/canalComunicacion.routes.js';
import conductorRoutes from './routes/conductor.routes.js';
import miembroCanalRoutes from './routes/miembroCanal.routes.js';
import pagoRoutes from './routes/pago.routes.js';
import vehiculoRoutes from './routes/vehiculo.routes.js';
import viajeRoutes from './routes/viaje.routes.js';



//middlewares
app.use(morgan  ('dev'));
app.use(express.json());

//routes
app.use('/api/tasks',tasksRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/canalComunicacion',canalComunicacionRoutes);
app.use('/api/conductor',conductorRoutes);
app.use('/api/miembroCanal',miembroCanalRoutes);
app.use('/api/pago',pagoRoutes);
app.use('/api/vehiculo',vehiculoRoutes);
app.use('/api/viaje',viajeRoutes);


//asiciaciones
import './models/user.js';
import './models/conductor.js';
import './models/vehiculo.js';
import './models/viaje.js';
import './models/pago.js';
import './models/miembroCanal.js';
import './models/canalComunicacion.js';
import './models/associations.js'; 


export default app;



