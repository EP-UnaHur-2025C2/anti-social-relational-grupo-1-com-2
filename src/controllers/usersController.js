const { User } = require('../../db/models')


const obtenerUsuarios = async (req,res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener usuarios'})
    }
}


const obtenerUsuario = async (req,res) => {
    try {
        const id = req.params.id
        const user = await User.findByPk(id)
        if(!user){
            res.status(400).json({message: 'Usuario no encontrado'})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: 'Error al encontrar el usuario'})
    }
}


const crearUsuario = async (req,res) => {
    try {
        const {nickName, email} = req.body
        const user = await User.create({
            nickName,
            email
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message: 'Error al crear el usuario'})
    }
}

const actualizarUsuario = async (req,res) => {
    try {
        const id = req.params.id
        const {nickName, email} = req.body
        const user = await User.findByPk(id)
        if(!user){
            res.status(400).json({message: 'Usuario no encontrado'})
        }
        await user.update({nickName, email})
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message: 'Error al actualizar usuario'})
    }
}

const eliminarUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByPk(id)
        if(!user){
            res.status(400).json({message: 'Usuario no encontrado'})
        }
        await user.destroy()
        res.status(200).json({message: 'Actor eliminado correctamente'})
    } catch (error) {
        res.status(500).json({message: 'Error al encontrar el usuario'})
    }
}


module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}