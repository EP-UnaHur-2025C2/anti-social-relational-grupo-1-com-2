const { Router } = require('express')
const usersController = require('../controllers/usersController')
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')
const { valid } = require('joi')
const validateCreateUser = require('../middlewares/validateUsers').validarCreateUser
const validateIdParams = require('../middlewares/validateIdParams').validateIdParams
const validateIdsParams = require('../middlewares/validateIdParams').validateIdsParams
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
router.post('/:id/post/:postId/comment',validateIdsParams, commentController.crearComment) //comprobar middlewares chequeo ids (no funcionan bien)

module.exports = router 