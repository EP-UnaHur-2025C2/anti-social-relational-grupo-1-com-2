const { Router } = require('express')
const postImageController = require('../controllers/post_imageController')
const router = Router()


router.get('/', postImageController.obtenerPostsImage)
router.get('/:id', postImageController.obtenerPostImage)
router.post('/', postImageController.crearPostImage)
router.put('/:id', postImageController.actualizarPostImage)
router.delete('/:id', postImageController.eliminarPostImage)

module.exports = router