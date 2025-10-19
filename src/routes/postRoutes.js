const { Router } = require('express')
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const postImageController = require('../controllers/post_imageController')
const tagController = require('../controllers/tagController')
const validateIdParams = require('../middlewares/validateIdParams').validateIdParams
const router = Router()


router.get('/', postController.obtenerPosts)
router.get('/:id',validateIdParams, postController.obtenerPost)
router.put('/:id',validateIdParams, postController.actualizarPost)
router.delete('/:id',validateIdParams, postController.eliminarPost)

// Rutas para comentarios relacionados con un post
router.get('/:id/comments',validateIdParams, commentController.obtenerComentariosDelPost)

// Rutas para imágenes relacionadas con un post
router.get('/:id/images',validateIdParams, postImageController.obtenerImagenesDelPost)
router.post('/:id/images',validateIdParams, postImageController.agregarImagenesAlPost)
router.delete('/:id/images',validateIdParams, postImageController.quitarImagenesDelPost)

// Rutas para etiquetas relacionadas con un post
router.get('/:id/tags',validateIdParams, tagController.obtenerEtiquetasDelPost)
router.post('/:id/tags',validateIdParams, tagController.agregarEtiquetasAlPost)

module.exports = router