const { Router } = require('express')
const usersController = require('../controllers/usersController')
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const {validarIdParams, validarCreateUser} = require('../middlewares/validateUsers')
const router = Router()


router.get('/', usersController.obtenerUsuarios)
router.get('/:id', validarIdParams ,usersController.obtenerUsuario)
router.post('/', validarCreateUser,usersController.crearUsuario)
router.put('/:id', validarIdParams,usersController.actualizarUsuario)
router.delete('/:id', validarIdParams, usersController.eliminarUsuario)

// Rutas para posts de un usuario
router.get('/:id/post',validarIdParams, postController.obtenerPostsDelUsuario)
router.post('/:id/post', validarIdParams, postController.crearPost)

// Rutas para comentarios de un usuario
router.post('/:id/post/:postId/comment', commentController.crearComment)

module.exports = router 