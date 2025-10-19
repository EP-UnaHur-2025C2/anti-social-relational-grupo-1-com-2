const Joi = require('joi')

const idParamsSchema = Joi.object({
    id: Joi.number().integer().positive().required()
})

const postIdParamsSchema = Joi.object({
    postId: Joi.number().integer().positive().required()
})

const validateIdParams = (req,res,next) => {
    const {error} = idParamsSchema.validate(req.params)
    if(error){
        return res.status(400).json({message: 'id erroneo'})
    }
    next()
}

const validatePostIdParams = (req,res,next) => {
    const {error} = postIdParamsSchema.validate(req.params)
    if(error){
        return res.status(400).json({message: 'postId erroneo'})
    }
    next()
}

module.exports = {
    validateIdParams,
    validatePostIdParams
}