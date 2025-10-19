const { Router } = require('express')
const tagController = require('../controllers/tagController')
const postController = require('../controllers/postController')
const validateIdParams = require('../middlewares/validateIdParams').validateIdParams
const router = Router()


router.get('/', tagController.obtenerTags)
router.get('/:id',validateIdParams, tagController.obtenerTag)
router.post('/', tagController.crearTag)
router.put('/:id',validateIdParams, tagController.actualizarTag)
router.delete('/:id',validateIdParams, tagController.eliminarTag)

// Rutas para posts relacionados con una etiqueta
router.get('/:id/posts',validateIdParams, postController.obtenerPostsDeLaEtiqueta)

module.exports = router