import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'; // Asegúrate de tener la conexión correctamente configurada
import { Status } from '../constants/index.js';
import { Conductor } from './conductor.js';
import { Viaje } from './viaje.js';
import { CanalDeComunicacion } from './canalComunicacion.js';
import { miembroCanal } from './miembroCanal.js';

export const Usuario = sequelize.define('Usuarios', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese nombre de usuario',
            }
        }
    },
    CorreoElectronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Ingrese su Correo Electrónico',
            }
        }
    },
    Contraseña: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese su Contraseña',
            }
        }
    },
    TipoUsuario: {
        type: DataTypes.STRING,
        allowNull: false,  
        defaultValue: Status.CLIENTE,
        validate: {
            notNull: {
                msg: 'El campo TipoUsuario no puede ser nulo' 
            },
            isIn: {
                args: [[Status.CLIENTE, Status.CONDUCTOR]],  
                msg: `El TipoUsuario debe ser ${Status.CLIENTE} o ${Status.CONDUCTOR}`,
            }
        }
    },
    Telefono: {
        type: DataTypes.STRING,
        allowNull: false,  
        validate: {
            isNumeric: {
                msg: 'El número de teléfono solo puede contener dígitos numéricos'  
            }
        }
    },
    Direccion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    FechaRegistro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    FotoPerfil: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'Usuarios',  // Especifica el nombre de la tabla
    timestamps: false  // Si no necesitas createdAt y updatedAt
});

