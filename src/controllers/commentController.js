const { Op } = require('sequelize')
const { Post, Comment, User } = require('../../db/models')
require('dotenv').config()

const obtenerComments = async (req,res) => {
    try {
        const comentarios = await Comment.findAll()
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
            res.status(404).json({message: 'Comentario no encontrado'})
        }
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message: 'Error al obetener el comentario'})
    }
}

const crearComment = async (req,res) => {
    try {
        const id = req.params.id
        const postId = req.params.postId
        const user = await User.findByPk(id)
        const {texto, fecha, esVisible} = req.body
        const comment = await user.createComment({ texto, fecha, esVisible, postId})
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
            res.status(404).json({message: 'Comentario no encontrado'})
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
            res.status(404).json({message: 'Comentario no encontrado'})
        }
        await comment.destroy()
        res.status(200).send()
    } catch (error) {
        res.status(500).json({message: 'Error al actualizar el comentario'})
    }
}

const obtenerComentariosDelPost = async (req, res) => { 
    try {
        const postId = req.params.id
        const fechaLimite = new Date()
        fechaLimite.setMonth(fechaLimite.getMonth() - proccess.env.MAX_MESES_COMENTARIOS)
        const post = await Post.findByPk(postId, {
            include: [{
                model: Comment,
                where: {
                    createdAt: {
                        [Op.gte]: fechaLimite //esto asegura que solo se obtengan los comentarios creados despues de la fecha limite
                                                //Op significa "operador" y gte es "greater than or equal" (mayor o igual que)
                    }
                },
                required: false //esto asegura que si no hay comentarios que cumplan la condicion, igual se devuelva el post
            }]
        });
        
        if(!post){
            return res.status(404).json({message: 'Post no encontrado'})
        }
        res.status(200).json(post.Comments)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener los comentarios del post'})
    }
}

module.exports = {
    obtenerComments,
    obtenerComment,
    crearComment,
    actualizarComment,
    eliminarComment,
    obtenerComentariosDelPost
}