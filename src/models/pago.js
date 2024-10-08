import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';  
import { Viaje } from './viaje.js'; 

export const Pago = sequelize.define('Pagos', {
    IDPago: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Monto: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
    },
    MetodoPago: {
        type: DataTypes.ENUM('Tarjeta', 'Efectivo'),
        allowNull: false
    },
    FechaPago: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Pagos',  
    timestamps: false  
});

