const CustomError = require('../libs/error');
const NotificationModel = require('../models/NotificationModel')
const emitterFile=require('../config/my_emitter')
const myEmitter = emitterFile.emitter;
exports.createNotification = async (payload) => {
    const type = payload.query.type
    if (!type)
        throw new CustomError("Type is empty", 404)
    const { receiver, sender } = payload.body
    if (!receiver, !sender)
        throw new CustomError("Body is empty", 404)
    console.log('type,receiver,sender: ', type, receiver, sender);
    const data = await NotificationModel.create({ type, sender, receiver })
    console.log('data: ', data);
    myEmitter.emit('test',data);
    // eventEmitter.emit('start', "start");
}