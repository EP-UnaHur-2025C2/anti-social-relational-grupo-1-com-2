const { Router } = require("express");
const usersController = require("../controllers/usersController");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const { valid } = require("joi");
const validateCreateUser =
  require("../middlewares/validateUsers").validarCreateUser;
const validateIdParams =
  require("../middlewares/validateIdParams").validateIdParams;
const validateIdsParams =
  require("../middlewares/validateIdParams").validateIdsParams;
const router = Router();
const validarNicknameUnico = require("../middlewares/validateUsers").validarNicknameUnico


router.get("/", usersController.obtenerUsuarios);
router.get("/:id", validateIdParams, usersController.obtenerUsuario);
router.post("/", validateCreateUser, validarNicknameUnico, usersController.crearUsuario);
router.put("/:id", validateIdParams, usersController.actualizarUsuario);
router.delete("/:id", validateIdParams, usersController.eliminarUsuario);

// Rutas para posts de un usuario
router.get(
  "/:id/post",
  validateIdParams,
  postController.obtenerPostsDelUsuario
);
router.post("/:id/post", validateIdParams, postController.crearPost);

// Rutas para comentarios de un usuario
router.post(
  "/:id/post/:postId/comment", 
  validateIdsParams,
  commentController.crearComment
); 
module.exports = router;
