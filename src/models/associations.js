import { Usuario } from './user.js';
import { Conductor } from './conductor.js';
import { Vehiculo } from './vehiculo.js';
import { Viaje } from './viaje.js';
import { Pago } from './pago.js';
import { CanalDeComunicacion } from './canalComunicacion.js';
import { miembroCanal } from './miembroCanal.js';

// Asociaciones
Usuario.hasOne(Conductor, { foreignKey: 'IDUsuario' }); // Relación uno a uno
Usuario.hasMany(Viaje, { foreignKey: 'IDUsuario' }); // Relación uno a muchos
Usuario.belongsToMany(CanalDeComunicacion, { through: miembroCanal, foreignKey: 'IDUsuario' }); // Relación muchos a muchos

Conductor.belongsTo(Usuario, { foreignKey: 'IDUsuario' }); // Relación uno a uno
Conductor.hasOne(Vehiculo, { foreignKey: 'IDConductor' }); // Relación uno a uno
Conductor.hasMany(Viaje, { foreignKey: 'IDConductor' }); // Relación uno a muchos

Vehiculo.belongsTo(Conductor, { foreignKey: 'IDConductor' }); // Relación uno a uno

Viaje.belongsTo(Usuario, { foreignKey: 'IDUsuario' }); // Relación uno a uno
Viaje.belongsTo(Conductor, { foreignKey: 'IDConductor' }); // Relación uno a uno
Viaje.hasOne(Pago, { foreignKey: 'IDViaje' }); // Relación uno a uno

Pago.belongsTo(Viaje, { foreignKey: 'IDViaje' }); // Relación uno a uno

miembroCanal.belongsTo(Usuario, { foreignKey: 'IDUsuario' }); // Relación uno a muchos
miembroCanal.belongsTo(CanalDeComunicacion, { foreignKey: 'IDCanal' }); // Relación uno a muchos

CanalDeComunicacion.hasMany(miembroCanal, { foreignKey: 'IDCanal' }); // Relación uno a muchos
