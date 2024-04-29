import Joi from 'joi'

export const signUpSchema = {
    body :Joi.object({
        email : Joi.string().email(),
        userName : Joi.string().alphanum().min(3).max(7).required(),
        password :  Joi.string().min(5).max(7).required(),
        gender : Joi.string().valid("male","female"),
        confirmPassword : Joi.valid(Joi.ref('password')).required()
    }),
    query : Joi.object({
        test : Joi.string().min(2).required()
    }) 
}

export const signInSchema = {
    body :Joi.object({
        email : Joi.string().email(),
        password :  Joi.string().min(5).max(7).required(),
    })
}