import User from '../../../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const userLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }) //check email
    if (!user) return res.status(404).json({ message: 'User not found' })

    const isMatch = await bcrypt.compare(password, user.password) //check password
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }) // create token

    res.status(200).json({ message: 'Login successful', token }) //ok
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
