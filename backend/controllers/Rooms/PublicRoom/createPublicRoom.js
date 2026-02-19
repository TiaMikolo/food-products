import Room from "../../../models/room.js";
import { RoomType } from "../../../const/room.js";

export const createPublicRoom = async (req, res) => {
  try {
    const room = new Room({ ...req.body, type: RoomType.PUBLIC });
    const saveRoom = await room.save();
    res.status(201).json(saveRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
