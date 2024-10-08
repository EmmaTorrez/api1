import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';  
import { miembroCanal } from './miembroCanal.js';  

export const CanalDeComunicacion = sequelize.define('CanalesDeComunicacion', {
    IDCanal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreCanal: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'CanalesDeComunicacion',  
    timestamps: false  
});

