const Joi = require('joi')

const idParamsSchema = Joi.object({
    id: Joi.number().integer().positive().required()
})


const createCommentSchema = Joi.object({
    texto : Joi.string().alphanum().min(10).required(),
    esVisible : Joi.boolean().required()
})



const validarIdParams = (req, res, next) => {
    const { error } = idParamsSchema.validate(req.params)
    if (error) {
        return res.status(400).json({ message: 'Id erroneo' })
    }
    next()
}


const validarCreateComment = (req,res,next) => {
    const {error, value} = createCommentSchema.validate(req.body)
    if(error){
        return res.status(400).json({message: 'No se pudo crear el comentario'})
    }
    req.body = value
    next()
}
