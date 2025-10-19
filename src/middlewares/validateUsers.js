const Joi = require('joi')

const createUserSchema = Joi.object({
    nickName : Joi.string().min(3).trim().required(),
    email : Joi.string().email().required()
})

const validarCreateUser = (req,res,next) =>{
    const {error, value} = createUserSchema.validate(req.body)
    if(error){
        return res.status(400).json({message: 'No se pudo crear el usuario'})
    }
    req.body = value
    next()
}

module.exports = {
    validarCreateUser
}