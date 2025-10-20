const Joi = require("joi");

const createCommentSchema = Joi.object({
  texto: Joi.string().alphanum().min(10).trim().required(),
});

const validateCreateComment = (req, res, next) => {
  const { error, value } = createCommentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Debe escribir un comentario válido de al menos 10 caracteres",
    });
  }
  req.body = value;
  next();
};

module.exports = {
  validateCreateComment,
};
