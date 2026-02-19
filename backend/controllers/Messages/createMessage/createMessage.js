import Message from "../../../models/message.js";
import User from "../../../models/user.js";

export const createMessage = async (req, res) => {
  try {
    const { recipient } = req.body;
    const recipientUser = await User.findById(recipient);
    if (!recipientUser) {
      return res.status(404).json({ message: "Recipient not found" });
    }

    const senderId = req.user.id;

    const message = new Message({
      ...req.body,
      sender: senderId,
      recipient: recipientUser._id,
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
