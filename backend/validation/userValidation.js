import Joi from 'joi'

export const userValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .uppercase()
    .required(),

  firstName: Joi.string()
    .trim()
    .custom(value => {
      return value
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }),

  email: Joi.string()
    .email()
    .required(),

  phoneNumber: Joi.string()
    .pattern(/^\+261(32|33|34|38)[0-9]{7}$/)
    .required()
})
