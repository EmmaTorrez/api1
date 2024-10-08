import { Usuario } from '../models/user.js';
//logica de negocio
import logger from "../logs/logger.js";
import { Status } from "../constants/index.js";
async function getUsers(req,res){
    //res.send('Lista  de usuarios');
    try{
        const users=await Usuario.findAll(
            {
                attributes:['ID','Nombre','CorreoElectronico','Contraseña','TipoUsuario','Telefono','Direccion','FechaRegistro','FotoPerfil'],
                order:[
                    ['ID','DESC']
                ],
            }
        );
        return res.json(users);
    }catch(error){
        logger.error(error.message);
        res.status(500).json({
            message:error.message
        });
    }
}

async function createUser(req, res) {
    // Desestructurar los datos correctamente desde req.body
    const {
        Nombre,
        CorreoElectronico,
        Contraseña,
        TipoUsuario,
        Telefono,
        Direccion,
        FechaRegistro,
        FotoPerfil
    } = req.body; // Los datos vienen del cuerpo de la solicitud

    try {
        // Crear el nuevo usuario
        const user = await Usuario.create({
            Nombre,
            CorreoElectronico,
            Contraseña,
            TipoUsuario,
            Telefono,
            Direccion,
            FechaRegistro,
            FotoPerfil
        });

        // Responder con el usuario creado
        return res.json(user);
    } catch (error) {
        // Manejar errores
        logger.error(error.message);
        res.status(500).json({
            message: error.message
        });
    }
}

async function getUser(req,res){
    const {ID}=req.params;
    try{
        const user=await Usuario.findOne({
            attributes:['Nombre','CorreoElectronico','Contraseña','TipoUsuario','Telefono','Direccion','FotoPerfil'],
            where:{
                ID
            }
        });
        if(!user){
            return res.status(404).json({
                message:"Usuario no encontrado"
            })
        }
        return res.json(user);
    }catch(error){  
        logger.error(error.message);
        res.status(500).json({
            message:error.message
        });
    }
}



export default{
    getUsers,
    createUser,
    getUser,
}
