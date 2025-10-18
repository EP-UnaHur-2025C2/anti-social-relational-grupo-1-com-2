const { Router } = require('express')
const tagController = require('../controllers/tagController')
const postController = require('../controllers/postController')
const router = Router()


router.get('/', tagController.obtenerTags)
router.get('/:id', tagController.obtenerTag)
router.post('/', tagController.crearTag)
router.put('/:id', tagController.actualizarTag)
router.delete('/:id', tagController.eliminarTag)

// Rutas para posts relacionados con una etiqueta
router.get('/:tagId/posts', postController.obtenerPostsDeLaEtiqueta)

module.exports = tagRouter