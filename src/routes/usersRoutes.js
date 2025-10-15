const { Router } = require('express')
const usersController = require('../controllers/usersController')
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const router = Router()


router.get('/', usersController.obtenerUsuarios)
router.get('/:id', usersController.obtenerUsuario)
router.post('/', usersController.crearUsuario)
router.put('/:id', usersController.actualizarUsuario)
router.delete('/:id', usersController.eliminarUsuario)

module.exports = usersRouter