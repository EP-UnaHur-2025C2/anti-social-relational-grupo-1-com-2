const { Router } = require('express')
const tagController = require('../controllers/tagController')
const router = Router()


router.get('/', tagController.obtenerTags)
router.get('/:id', tagController.obtenerTag)
router.post('/', tagController.crearTag)
router.put('/:id', tagController.actualizarTag)
router.delete('/:id', tagController.eliminarTag)

module.exports = tagRouter