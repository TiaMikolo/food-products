import express from "express";
import { createPublicRoom } from "../controllers/Rooms/PublicRoom/createPublicRoom.js";
import { createPrivateRoom } from "../controllers/Rooms/privateRoom/createPrivateRoom.js";
import { inviteUserInPublicRoom } from "../controllers/Rooms/PublicRoom/inviteUserInPublicRoom.js";
import { inviteUserInPrivateRoom } from "../controllers/Rooms/privateRoom/inviteUserInPrivateRoom.js";

const router = express.Router();

//create public room
router.post("/room/public", createPublicRoom);

//create private room
router.post("/room/private", createPrivateRoom);

//invite user in public room
router.post("/room/public/:id/invite/:userId", inviteUserInPublicRoom);

//invite user in private room
router.post("/room/private/:id/invite/:userId", inviteUserInPrivateRoom);

export default router;
