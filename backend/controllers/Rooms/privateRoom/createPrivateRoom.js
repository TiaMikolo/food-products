import Room from "../../../models/room.js";
import { RoomType } from "../../../const/room.js";

export const createPrivateRoom = async (req, res) => {
  try {
    const members = req.body.members || []; //if 0 member , we take array vide

    if (members.includes(req.body.creator)) {
      return res.status(403).json({
        message: "You cannot create a private room with yourself as a member",
      });
    }
    const room = new Room({
      ...req.body,
      type: RoomType.PRIVATE,
      members: members,
    });
    const saveRoom = await room.save();
    res.status(201).json(saveRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
