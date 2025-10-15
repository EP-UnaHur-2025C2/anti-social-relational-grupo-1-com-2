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

module.exports = postRouter