import User from "../../../models/user.js";
import { userValidationSchema } from "../../../validation/userValidation.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  const { error, value } = userValidationSchema.validate(req.body); //checks if the data sent by the user complies with the schema rules
  // const {error , value} : destruction objet
  // const result = userValidationSchema.validate(req.body)
  // const result.error , result.value

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(value.password, 10);

    const user = new User({ ...value, password: hashedPassword });
    const saveUser = await user.save();
    res.status(201).json({ user: saveUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
