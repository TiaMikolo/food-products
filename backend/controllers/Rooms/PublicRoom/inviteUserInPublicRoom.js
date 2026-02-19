import Room from "../../../models/room.js";
import User from "../../../models/user.js";

export const inviteUserInPublicRoom = async (req, res) => {
  try {
    const { id, userId } = req.params;
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    if (room.type !== "public") {
      return res
        .status(403)
        .json({ message: "You can only invite users to public rooms" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (room.members.map((id) => id.toString()).includes(user._id.toString())) {
      return res
        .status(409)
        .json({ message: "User is already a member of the room" });
    }

    room.members.push(user._id);
    await room.save();
    res.status(200).json({ message: "User invited to the public room" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
