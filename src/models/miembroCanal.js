import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';  
import { CanalDeComunicacion } from './canalComunicacion.js';  
import { Usuario } from './user.js';  

export const miembroCanal = sequelize.define('miembroCanales', {
    IDMiembro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Rol: {
        type: DataTypes.ENUM('Administrador', 'Miembro'),
        allowNull: false
    }
}, {
    tableName: 'miembroCanal',  
    timestamps: false  
});

