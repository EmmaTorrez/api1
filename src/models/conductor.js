import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'; 
import { Usuario } from './user.js'; 
import { Vehiculo } from './vehiculo.js';
import { Viaje } from './viaje.js';

export const Conductor = sequelize.define('Conductores', {
    IDConductor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LicenciaConducir: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    CalificacionPromedio: {
        type: DataTypes.DECIMAL(2, 1),
        defaultValue: 0
    },
    Estado: {
        type: DataTypes.ENUM('Activo', 'Inactivo'),
        allowNull: false,
        defaultValue: 'Inactivo'
    }
}, {
    tableName: 'Conductores', 
    timestamps: false 
});

