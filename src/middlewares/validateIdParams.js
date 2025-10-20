const Joi = require("joi");

const idParamsSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});

const idsParamsSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  postId: Joi.number().integer().positive().required(),
});

const validateIdParams = (req, res, next) => {
  const { error } = idParamsSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: "El ID ingresado no es válido" });
  }
  next();
};

const validateIdsParams = (req, res, next) => {
  const { error } = idsParamsSchema.validate(req.params);
  if (error) {
    return res.status(400).json({
      message: "Los IDs ingresados no son válidos",
      details: error.details,
    });
  }
  next();
};

module.exports = {
  validateIdParams,
  validateIdsParams,
};
