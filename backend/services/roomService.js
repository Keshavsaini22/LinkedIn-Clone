const CustomError = require('../libs/error');
const RoomModel = require('../models/RoomSchema')
const UserModel = require('../models/UserSchema')

exports.createRoom = async (payload) => {
    const {recieverId} = payload.body;
    const userId = payload.userId
    console.log(recieverId,userId)
    const reciever = await UserModel.findById(recieverId);
    if (!reciever) throw new CustomError("User doesn't exist", 404);
    const participants = [userId, recieverId];
    const existedRoom = await RoomModel.find({ participants }).populate("participants", ["name", "description"]);  /// Give a check 
    console.log("existedRoom", existedRoom);
    if (existedRoom.length!==0) return existedRoom;
    const room = await RoomModel.create({ participants });
    if (!room) throw new CustomError("Room not created", 500);
    console.log("room ", room);
    return room.populate("participants", ["name", "description"]);
}