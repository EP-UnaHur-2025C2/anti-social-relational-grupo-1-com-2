const { Post } = require('../../db/models')

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
            res.status(400).json({message: 'Post no encontrado'})
        }
        res.status(200).json(post)
    }
    catch (error) { 
        res.status(500).json({message: 'Error al obtener post'})
    }
}

const crearPost = async (req, res) => { 
    try { 
        const {texto} = req.body
        const post = await Post.create({
            texto
        })
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
            res.status(400).json({message: 'Post no encontrado'})
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
            res.status(400).json({message: 'Post no encontrado'})
        }
        await post.destroy()
        res.status(200).json({message: 'Post eliminado'})
    }
    catch (error) { 
        res.status(500).json({message: 'Error al eliminar post'})
    }
}

module.exports = {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost
}