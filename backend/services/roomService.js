const CustomError = require('../libs/error');
const RoomModel = require('../models/RoomSchema')
const UserModel = require('../models/UserSchema')

exports.createRoom = async (payload) => {
    const { recieverId } = payload.body;
    const userId = payload.userId
    console.log(recieverId, userId)
    const reciever = await UserModel.findById(recieverId);
    if (!reciever) throw new CustomError("User doesn't exist", 404);
    const participants = [recieverId, userId];
    // const participants = [(new mongoose.Types.ObjectId(userId)), (new mongoose.Types.ObjectId(receiverId))];
    const existedRoom = await RoomModel.find({ participants: { $all: participants } }).populate({ path: "participants", select: ["name", "desc"], match: { _id: { $ne: userId } } });  /// Give a check 
    console.log("existedRoom", existedRoom);
    if (existedRoom.length !== 0) return existedRoom;
    const room = await RoomModel.create({ participants })
    if (!room) throw new CustomError("Room not created", 500);
    console.log("room ", room);
    return room.populate({ path: "participants", select: ["name", "desc"], match: { _id: { $ne: userId } } });
}

exports.fetchRoom = async (payload) => {
    const userId = payload.userId
    const res = await RoomModel.find({ participants: userId }).populate({ path: "participants", select: ["name", "desc"], match: { _id: { $ne: userId } } })
    if (!res)
        throw new CustomError("No data found", 204);
    return res;
}