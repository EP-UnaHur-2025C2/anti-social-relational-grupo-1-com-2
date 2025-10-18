const { Router } = require('express')
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const postImageController = require('../controllers/post_imageController')
const tagController = require('../controllers/tagController')
const router = Router()


router.get('/', postController.obtenerPosts)
router.get('/:id', postController.obtenerPost)
router.post('/', postController.crearPost)
router.put('/:id', postController.actualizarPost)
router.delete('/:id', postController.eliminarPost)

// Rutas para comentarios relacionados con un post
router.get('/:postId/comments', commentController.obtenerComentariosDelPost)

// Rutas para imágenes relacionadas con un post
router.get('/:postId/images', postImageController.obtenerImagenesDelPost)

// Rutas para etiquetas relacionadas con un post
router.get('/:postId/tags', tagController.obtenerEtiquetasDelPost)

module.exports = postRouter