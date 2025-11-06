const { User } = require("../../db/models")
const Joi = require("joi");

const createUserSchema = Joi.object({
  nickName: Joi.string().min(3).trim().required(),
  email: Joi.string().email().required(),
});

const validarNicknameUnico = async (req, res, next) => {
  try {
    const { nickName } = req.body;
    const existingUser = await User.findOne({ where: { nickName } });
    if (existingUser) {
      return res.status(409).json({
        message: `El nickname "${nickName}" ya está en uso`,
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error al validar nickname",
      error: error.message,
    });
  }
};

const validarCreateUser = (req, res, next) => {
  const { error, value } = createUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message:
        "Debe ingresar un nickName de al menos 3 caracteres y un email válido",
    });
  }
  req.body = value;
  next();
};

module.exports = {
  validarCreateUser,
  validarNicknameUnico
};
