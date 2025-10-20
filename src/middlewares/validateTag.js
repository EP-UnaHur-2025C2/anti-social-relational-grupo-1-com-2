const Joi = require("joi");

const tagParamsSchema = Joi.object({
  texto: Joi.string()
    .pattern(/^#[a-zA-Z0-9_-]+$/)
    .min(2)
    .trim()
    .required(),
});

const validateTag = (req, res, next) => {
  const { error, value } = tagParamsSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "El tag debe empezar con # y contener solo letras, números, y guinoes",
    });
  }
  req.body = value;
  next();
};

module.exports = {
  validateTag,
};
