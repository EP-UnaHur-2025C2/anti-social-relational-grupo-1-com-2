const { Post_image, Post } = require('../../db/models')

const obtenerPostsImage = async (req, res) => { 
    try { 
        const postsImage = await Post_image.findAll()
        res.json(postsImage)
    }
    catch (error) { 
        res.status(500).json({ error: 'Error al obtener los posts de imagen' })
    }
}

const obtenerPostImage = async (req, res) => { 
    try {
        const { id } = req.params.id
        const postImage = await Post_image.findByPk(id)
        if (!postImage) {
            return res.status(404).json({ error: 'Post de imagen no encontrado' })
        }
        res.json(postImage)

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el post de imagen' })
    }
}

const crearPostImage = async (req, res) => { 
    try { 
        const { url } = req.body
        const postImage = await Post_image.create({ url })
        res.status(201).json(postImage)
    }
    catch (error) { 
        res.status(500).json({ error: 'Error al crear el post de imagen' })
    }
}

const actualizarPostImage = async (req, res) => { 
    try { 
        const { id } = req.params.id
        const { url } = req.body
        const postImage = await Post_image.findByPk(id)
        if (!postImage) {
            return res.status(404).json({ error: 'Post de imagen no encontrado' })
        }
        await postImage.update({ url })
        res.json(postImage)
    }
    catch (error) { 
        res.status(500).json({ error: 'Error al actualizar el post de imagen' })
    }
}

const eliminarPostImage = async (req, res) => { 
    try { 
        const { id } = req.params.id
        const postImage = await Post_image.findByPk(id)
        if (!postImage) {
            return res.status(404).json({ error: 'Post de imagen no encontrado' })
        }
        await postImage.destroy()
        res.json({ message: 'Post de imagen eliminado correctamente' })
    }
    catch (error) { 
        res.status(500).json({ error: 'Error al eliminar el post de imagen' })
    }
}

const obtenerImagenesDelPost = async (req, res) => { 
    try {
        const postId = req.params.postId
        const post = await Post.findByPk(postId, {
            include: Post_image
        })
        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' })
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las imágenes del post' })
    }
}

module.exports = {
  obtenerPostsImage,
  obtenerPostImage,
  crearPostImage,
  actualizarPostImage,
  eliminarPostImage,
  obtenerImagenesDelPost
}