const CustomError = require('../libs/error');
const RoomModel = require('../models/RoomSchema')
const MessageModel = require('../models/MessageSchema')
const UserModel = require('../models/UserSchema');
const { response } = require('express');

exports.sendMessage = async (payload) => {
    const userId = payload.userId
    const { content, roomid } = payload.body
    if (!content || !roomid)
        throw new CustomError("Body is incomplete", 401);
    const myRoom = await RoomModel.findById(roomid);
    if (!myRoom)
        throw new CustomError("Room doesnot exist so create room", 404);
    const message = (await MessageModel.create({ roomid, content, sender: userId })).populate("roomid");
    return message;
}


exports.getMessages = async (payload) => {
    const userId = payload.userId
    const { roomid } = payload.body
    if (!roomid)
        throw new CustomError("Body is incomplete", 401);
    const myRoom = await RoomModel.findById(roomid);
    if (!myRoom)
        throw new CustomError("Room doesnot exist so create room", 404);
    const message = await MessageModel.find({ roomid })
    if (message.length === 0)
        throw new CustomError("No data found", 204);
    return message;
}