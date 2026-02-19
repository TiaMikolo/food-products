import Joi from "joi";

export const userValidationSchema = Joi.object({
  name: Joi.string().trim().uppercase().required(),

  firstName: Joi.string()
    .trim()
    .custom((value) => {
      //.custom(): personnalized a rules validation
      return value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) //charAt(0) == slice(0,1)
        .join(" ");
    }),

  email: Joi.string().email().required(),

  phoneNumber: Joi.string()
    .pattern(/^\+261(32|33|34|38)[0-9]{7}$/) //.pattern(): validation regex
    .required(),

  password: Joi.string().min(6).max(100).required(),
});
