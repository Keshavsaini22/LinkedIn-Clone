const ConnectionModel = require('../models/ConnectionSchema')
const UserModel = require('../models/UserSchema')
const CustomError = require('../libs/error');
var ObjectId = require('mongodb').ObjectId;


exports.sendRequest = async (payload) => {
    const { friendId } = payload.body
    console.log('friendId: ', friendId);
    if (!friendId)
        throw new CustomError("Id of receiver is required", 401);
    return await ConnectionModel.create({ sender: payload.userId, receiver: friendId, status: "pending" })
}

exports.getFriends = async (payload) => {
    const { status } = payload.body
    console.log('status: ', status);
    const userId = payload.userId
    if (!status)
        throw new CustomError("Status is required", 401);
    let query = { receiver: userId, status: status }
    if (status === 'confirm') {
        query = { $or: [{ receiver: userId }, { sender: userId }], status: status }
    }
    const data = await ConnectionModel.find(query)
    console.log('data: ', data);
    return data
}

exports.getSuggestions = async (payload) => {
    const userId = payload.userId;
    const connData = await ConnectionModel.find({ $and: [{ $or: [{ sender: userId }, { reciever: userId }] }, { $or: [{ status: 'reject' }, { status: 'remove' }] }] })
    const output = connData?.map((item) => {
        if (item.sender == userId) {
            return item.receiver
        }
        else {
            return item.sender
        }
    })
    const myId = new ObjectId(userId);
    output.push(myId)
    const data = await UserModel.find({ _id: { $nin: output } })
    return data;
}

exports.updateRelation = async (payload) => {
    const userId = payload.userId;
    const coonectionId = payload.query.id;
    console.log('connection: ', coonectionId);
    if (!coonectionId)
        throw new CustomError("Connection id is required", 401);
    const connection = ConnectionModel.findById(coonectionId);
    if (!connection)
        throw new CustomError("No connection exist", 404);
    const { status } = payload.body;
    console.log('status: ', status);
    if (!status)
        throw new CustomError("Status is required", 401);
    if (status === 'pending')
        throw new CustomError("Pending cant be send in body", 400);

    if (status === 'withdraw' && connection.status === 'pending') {
        const res = ConnectionModel.findOneAndUpdate({ sender: userId, _id: coonectionId }, { status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
    else if (status === 'confirm' || status === 'reject') {
        const res = ConnectionModel.findOneAndUpdate({ receiver: userId, _id: coonectionId }, { status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
    else if (status === 'remove') {
        const res = ConnectionModel.findOneAndUpdate({ $or: [{ _id: coonectionId, receiver: userId }, { sender: userId, _id: coonectionId }] }, { status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
}