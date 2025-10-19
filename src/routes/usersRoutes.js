const { Router } = require('express')
const usersController = require('../controllers/usersController')
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const { valid } = require('joi')
const validateCreateUser = require('../middlewares/validateUsers').validarCreateUser
const validateIdParams = require('../middlewares/validateIdParams').validateIdParams
const validatePostIdParams = require('../middlewares/validateIdParams').validatePostIdParams
const router = Router()


router.get('/', usersController.obtenerUsuarios)
router.get('/:id', validateIdParams ,usersController.obtenerUsuario)
router.post('/', validateCreateUser,usersController.crearUsuario)
router.put('/:id', validateIdParams,usersController.actualizarUsuario)
router.delete('/:id', validateIdParams, usersController.eliminarUsuario)

// Rutas para posts de un usuario
router.get('/:id/post',validateIdParams, postController.obtenerPostsDelUsuario)
router.post('/:id/post', validateIdParams, postController.crearPost)

// Rutas para comentarios de un usuario
router.post('/:id/post/:postId/comment',validateIdParams, validatePostIdParams, commentController.crearComment)

module.exports = router 