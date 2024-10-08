import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';  
import { Usuario } from './user.js';
import { Conductor } from './conductor.js';
import { Pago } from './pago.js';

export const Viaje = sequelize.define('Viajes', {
    IDViaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Origen: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Destino: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Distancia: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true
    },
    Costo: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: true
    },
    FechaHoraInicio: {
        type: DataTypes.DATE,
        allowNull: true
    },
    FechaHoraFin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Estado: {
        type: DataTypes.ENUM('Pendiente', 'En Curso', 'Completado', 'Cancelado'),
        allowNull: false,
        defaultValue: 'Pendiente'
    }
}, {
    tableName: 'Viajes',  
    timestamps: false  
});

