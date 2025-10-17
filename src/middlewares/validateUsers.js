const Joi = require('joi')

const idParamsSchema = Joi.object({
    id : Joi.number().integer().positive().required()
})

const createUserSchema = Joi.object({
    nickName : Joi.string().min(5).trim().required(),
    email : Joi.string().email().required()
})


const validarIdParams = (req,res,next) => {
    const {error} = idParamsSchema.validate(req.params)
    if(error){
        return res.status(400).json({message: 'Id erroneo'})
    }
    next()
}


const validarCreateUser = (req,res,next) =>{
    const {error, value} = createUserSchema.validate(req.body)
    if(error){
        return res.status(400).json({message: 'No se pudo crear el usuario'})
    }
    req.body = value
    next()
}

module.exports = {
    validarIdParams,
    validarCreateUser
}