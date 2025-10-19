const { Tag, Post } = require('../../db/models')

const obtenerTags = async (req, res) => { 
    try { 
        const tags =  await Tag.findAll()
        res.status(200).json(tags)
    }
    catch (error) { 
        res.status(500).json({ message: 'Error al obtener tags' })
    }
}

const obtenerTag = async (req, res) => { 
    try {
        const id = req.params.id
        const tag = await Tag.findByPk(id)
        if (!tag) {
            return res.status(404).json({ message: 'Tag no encontrado' })
        }
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tag' })
    }
}

const crearTag = async (req, res) => { 
    try {
        const { texto } = req.body
        const tag = await Tag.create({ texto })
        res.status(201).json(tag)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear tag' })
    }
}

const actualizarTag = async (req, res) => { 
    try {
        const id = req.params.id
        const { texto } = req.body
        const tag = await Tag.findByPk(id)
        if (!tag) {
            return res.status(404).json({ message: 'Tag no encontrado' })
        }
        await tag.update({ texto })
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar tag' })
    }
}

const eliminarTag = async (req, res) => { 
    try {
        const id = req.params.id
        const tag = await Tag.findByPk(id)
        if (!tag) {
            return res.status(404).json({ message: 'Tag no encontrado' })
        }
        await tag.destroy()
        res.status(200).json({ message: 'Tag eliminado correctamente' })
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar tag' })
    }
}

const obtenerEtiquetasDelPost = async (req, res) => { 
    try {
        const postId = req.params.id
        const post = await Post.findByPk(postId, {
            include: [{
                model: Tag,
                attributes: ['texto'],
                through: { attributes: [] }
            }]
        })
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' })
        }
        res.status(200).json(post.Tags)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener etiquetas del post' })
    }
}

const agregarEtiquetasAlPost = async (req, res) => { 
    try {
        const { tagIds = [] } = req.body
        const postId = req.params.id
        const post = await Post.findByPk(postId)
        //hacer middleware para verificar que el post exista
        await post.addTags(tagIds)
        res.status(200).json({ message: 'Etiquetas agregadas al post correctamente' })
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar etiquetas al post' })
    }
}

module.exports = {
    obtenerTags,
    obtenerTag,
    crearTag,
    actualizarTag,
    eliminarTag,
    obtenerEtiquetasDelPost,
    agregarEtiquetasAlPost
}