const ConnectionModel = require('../models/ConnectionSchema')
const UserModel = require('../models/UserSchema')
const CustomError = require('../libs/error');
var ObjectId = require('mongodb').ObjectId;


exports.sendRequest = async (payload) => {
    const { friendId } = payload.body
    const userId = payload.userId
    console.log('friendId: ', friendId);
    if (!friendId)
        throw new CustomError("Id of receiver is required", 401);
    const user = UserModel.findById(friendId);
    if (!user)
        throw new CustomError("Recieving User doesn't exist anymore", 404);
    const connection = await ConnectionModel.findOne({ $or: [{ sender: userId, receiver: friendId }, { receiver: userId, sender: friendId }] })
    // const connection = await ConnectionModel.findOne({ $and: [{ $or: [{ sender: userId }, { receiver: friendId }], $or: [{ senderId: friendId }, { recieverId: userId }] }] })

    if (!connection)
        return await ConnectionModel.create({ sender: userId, receiver: friendId, status: "pending" })
    if (connection.status !== 'withdraw')
        throw new CustomError("Cannot send request", 401);

    //greater than withdraw
    if ((new Date()).getTime() - connection.updatedAt.getTime() > 1855058823) //greater than new date by 3 weeks
    {
        const response = await ConnectionModel.findByIdAndUpdate(connection._id, { status: 'PENDING' }, { new: true })
        return response;
    }
    throw new CustomError("Can't send the request before 3 weeks from withdrawing ", 409);
}

exports.getFriends = async (payload) => {
    // const status = payload.query.status
    // console.log('status: ', status);
    // const userId = payload.userId
    // if (!status)
    //     throw new CustomError("Status is required", 401);
    // let query = { receiver: userId, status: status }
    // if (status === 'confirm') {
    //     query = { $or: [{ receiver: userId }, { sender: userId }], status: status }
    // }
    // const data = await ConnectionModel.find(query)
    // console.log('data: ', data);
    // return data
    const userId = payload.userId
    const response = await ConnectionModel.find({ $or: [{ sender: userId }, { receiver: userId }] }).populate({ path: 'sender', select: ['email', 'name', 'image', 'title'] });
    const data = {}
    let pending, confirm;
    if (response.length > 0) {
        pending = response.filter((item) => { return item.status === 'pending' && item.receiver.toString() === userId })
        confirm = response.filter((item) => { return item.status === 'confirm' && (item.receiver.toString() === userId || item.sender.toString() === userId) })
    }
    data.pending = pending;
    data.confirm = confirm;
    return data
}

exports.getSuggestions = async (payload) => {
    const userId = payload.userId;
    const connData = await ConnectionModel.find({ $and: [{ $or: [{ sender: userId }, { reciever: userId }] }, { $nor: [{ status: 'reject' }, { status: 'remove' }] }] })
    // .populate('userId', 'name').sort({ createdAt: -1 });
    // console.log('connData: ', connData);
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
    console.log('output: ', output);

    const data = await UserModel.find({ _id: { $nin: output } })
    return data;
}

exports.updateRelation = async (payload) => {
    const userId = payload.userId;
    const coonectionId = payload.query.id;
    console.log('connection: ', coonectionId);
    if (!coonectionId)
        throw new CustomError("Connection id is required", 401);
    const connection = await ConnectionModel.findById(coonectionId);
    if (!connection)
        throw new CustomError("No connection exist", 404);
    if (connection.receiver != userId)
        throw new CustomError("Invalid user", 404);
    const { status } = payload.body;
    if (!status)
        throw new CustomError("Status is required", 401);
    if (status === 'pending')
        throw new CustomError("Pending cant be send in body", 400);
    if (status === 'withdraw' && connection.sender != userId)
        throw new CustomError("You cant withdraw request", 400);
    if (status === 'withdraw' && connection.status === 'pending') {
        const res = await ConnectionModel.findOneAndUpdate({ sender: userId, _id: coonectionId }, { status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
    else if ((status === 'confirm' && connection.status != 'reject') || (status === 'reject' && connection.status != 'confirm')) {
        console.log('status: ', status);
        const res = await ConnectionModel.findOneAndUpdate({ receiver: userId, _id: coonectionId }, { status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
    else if (status === 'remove') {
        const res = await ConnectionModel.findOneAndUpdate({ $or: [{ _id: coonectionId, receiver: userId }, { sender: userId, _id: coonectionId }] }, { status: status }, { new: true, upsert: true })
        console.log('res: ', res);
        return res;
    }
    else
        throw new CustomError("Invalid request", 400);
}

//user2 65dd687f791bd63225d1c169
//user3 65dd68ad791bd63225d1c16d
// me->2 pending
// me->3