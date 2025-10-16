const { User, Comment } = require('../../db/models')
const comment = require('../../db/models/comment')




const obtenerComments = async (req,res) => {
    try {
        const comentarios = await Comment.findAll
        res.status(200).json(comentarios)
        
    } catch (error) {
        res.status(500).json({message: 'Error al obetener los comentarios'})
    }
}


const obtenerComment = async (req,res) => {
    try {
        const id = req.params.id
        const comment = await comment.findByPk(id)
        if(!comment){
            res.status(400).json({message: 'Comentario no encontrado'})
        }
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message: 'Error al obetener el comentario'})
    }
}

const crearComment = async (req,res) => {
    try {
        const {texto, fecha, esVisible} = req.body
        const comment = await Comment.crate({
            texto,
            fecha,
            esVisible
        })
        res.status(201).json({comment})
    } catch (error) {
        res.status(500).json({message: 'Error al crear el comentario'})
    }
}


const actualizarComment = async (req,res) => {
    try {
        const id = req.params.id
        const {texto, fecha, esVisible} = req.body
        const comment = await comment.findByPk(id)

        if(!comment){
            res.status(400).json({message: 'Comentario no encontrado'})
        }
        await comment.update({texto, fecha, esVisible})
        res.json(comment)
    } catch (error) {
        res.status(500).json({message: 'Error al actualizar el comentario'})
    }   
}

const eliminarComment = async (req,res) => {
    try {
        const id = req.params.id
        const comment = await Comment.findByPk(id)
        if(!comment){
            res.status(400).json({message: 'Comentario no encontrado'})
        }
        await comment.destroy()
        res.status(200).send()
    } catch (error) {
        res.status(500).json({message: 'Error al actualizar el comentario'})
    }
}

module.exports = {
    obtenerComments,
    obtenerComment,
    crearComment,
    actualizarComment,
    eliminarComment
}