const { Router } = require('express')
const commentController = require('../controllers/commentController')
const router = Router()


router.get('/', commentController.obtenerComments)
router.get('/:id', commentController.obtenerComment)
router.post('/', commentController.crearComment)
router.put('/:id', commentController.actualizarComment)
router.delete('/:id', commentController.eliminarComment)

module.exports = commentRouter