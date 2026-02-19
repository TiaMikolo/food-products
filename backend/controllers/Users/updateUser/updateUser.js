import User from '../../../models/user.js'

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    if (!updateUser) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(updateUser)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
