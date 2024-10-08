import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'; 
import { Conductor } from './conductor.js';

export const Vehiculo = sequelize.define('Vehiculos', {
    IDVehiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Placa: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    },
    Marca: {
        type: DataTypes.STRING(50),
        allowNull: true  
    },
    Modelo: {
        type: DataTypes.STRING(50),
        allowNull: true  
    },
    Año: {
        type: DataTypes.INTEGER,
        allowNull: true  
    },
    Color: {
        type: DataTypes.STRING(30),
        allowNull: true  
    },
    TipoVehiculo: {
        type: DataTypes.STRING(50),
        allowNull: true  
    },
    NumeroSOAT: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    FechaVencimientoSOAT: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'Vehiculos', 
    timestamps: false  
});

