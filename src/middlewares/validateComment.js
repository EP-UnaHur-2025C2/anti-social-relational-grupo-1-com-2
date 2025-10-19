const Joi = require('joi')

const createCommentSchema = Joi.object({
    texto : Joi.string().alphanum().min(10).required(),
    esVisible : Joi.boolean().required()
})

const validateCreateComment = (req,res,next) => {
    const {error, value} = createCommentSchema.validate(req.body)
    if(error){
        return res.status(400).json({message: 'No se pudo crear el comentario'})
    }
    req.body = value
    next()
}

module.exports = {
    validateCreateComment
}
