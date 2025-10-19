const { Post, User, Tag } = require('../../db/models')

const obtenerPosts = async (req, res) => { 
    try { 
        const posts = await Post.findAll()
        res.status(200).json(posts)
    }
    catch (error) { 
        res.status(500).json({message: 'Error al obtener posts'})
    }
}

const obtenerPost = async (req, res) => {
    try { 
        const id = req.params.id
        const post = await Post.findByPk(id)
        if(!post){
            return res.status(404).json({message: 'Post no encontrado'})
        }
        res.status(200).json(post)
    }
    catch (error) { 
        res.status(500).json({message: 'Error al obtener post'})
    }
}

const crearPost = async (req, res) => { 
    try { 
        const id = req.params.id
        const user = await User.findByPk(id)
        const {texto} = req.body
        if(!user) {
            return res.status(404).json({message: 'El usuario no existe'})
        }
        const post = await user.createPost({texto})
        res.status(201).json(post)
    }
    catch (error) { 
        res.status(500).json({message: 'Error al crear post'})
    }
}

const actualizarPost = async (req, res) => { 
    try { 
        const id = req.params.id
        const { texto } = req.body
        const post = await Post.findByPk(id)
        if(!post){
           return res.status(404).json({message: 'Post no encontrado'})
        }
        await post.update({texto})
        res.status(201).json(post)
    }
    catch (error) { 
        res.status(500).json({message: 'Error al actualizar post'})
    }
}

const eliminarPost = async (req, res) => { 
    try { 
        const id = req.params.id
        const post = await Post.findByPk(id)
        if(!post){
           return res.status(404).json({message: 'Post no encontrado'})
        }
        await post.destroy()
        res.status(200).json({message: 'Post eliminado'})
    }
    catch (error) { 
        res.status(500).json({message: 'Error al eliminar post'})
    }
}

const obtenerPostsDelUsuario = async (req, res) => { 
    try {
        const userId = req.params.id
        const user = await User.findByPk(userId, {
            include: Post
        })
            if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener posts del usuario'})
    }
}

const obtenerPostsDeLaEtiqueta = async (req, res) => { 
    try {
        const tagId = req.params.tagId
        const tag = await Tag.findByPk(tagId, {
            include: [{
                model: Post,
                through: { attributes: [] }
            }]
        })
        if(!tag){
            return res.status(404).json({message: 'Etiqueta no encontrada'})
        }
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener posts de la etiqueta'})
    }
}

module.exports = {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost,
    obtenerPostsDelUsuario,
    obtenerPostsDeLaEtiqueta
}