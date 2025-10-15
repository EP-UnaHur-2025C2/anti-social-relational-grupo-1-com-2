const { Router } = require('express')
const usersController = require('../controllers/usersController')
const usersRouter = Router()


router.get('/', usersController.obtenerUsuarios)
router.get('/:id', usersController.obtenerUsuario)
router.post('/', usersController.crearUsuario)
router.put('/:id', usersController.actualizarUsuario)
router.delete('/:id', usersController.eliminarUsuario)

module.exports = usersRouter