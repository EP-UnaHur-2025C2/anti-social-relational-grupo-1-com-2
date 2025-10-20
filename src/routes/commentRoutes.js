const { Router } = require("express");
const commentController = require("../controllers/commentController");
const validarCreateComment =
  require("../middlewares/validateComment").validateCreateComment;
const validarIdParams =
  require("../middlewares/validateIdParams").validateIdParams;

const router = Router();

router.get("/", commentController.obtenerComments);
router.get("/:id", validarIdParams, commentController.obtenerComment);
router.post("/", validarCreateComment, commentController.crearComment);
router.put("/:id", validarIdParams, commentController.actualizarComment);
router.delete("/:id", validarIdParams, commentController.eliminarComment);

module.exports = router;
