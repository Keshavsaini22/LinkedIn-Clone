const ReactionModel = require('../models/ReactionSchema');
const PostModel = require('../models/PostSchema');
const CommentsnModel = require('../models/CommentSchema');
const axios = require('axios')
const CustomError = require('../libs/error');

exports.postPostReaction = async (payload) => {
    const { postId } = payload.params;
    const userId = payload.userId;
    const type = Object.keys(payload.body)[0];
    //console.log("type", payload)
    if (!type)
        throw new CustomError("Bad Request", 404)
    const data = await ReactionModel.findOneAndUpdate({ userId: userId, postId: postId }, { type: type }, { new: true, upsert: true }).populate('postId')
    //console.log("data", data)
    try {
        const resofnoti = await axios.post(`http://localhost:8084/notification/?type=Reaction`, { receiver: data.postId.userId, sender: data.userId })
        console.log('resofnoti: ', resofnoti.data);
    }
    catch (e) {
        console.log('e: ', e.message);
    }
    return data;
}

exports.postCommentReaction = async (payload) => {
    const { cmtId } = payload.params;
    const userId = payload.userId;
    const type = Object.keys(payload.body)[0];
    if (!type)
        throw new CustomError("Bad Request", 404)
    const data = await ReactionModel.findOneAndUpdate({ userId: userId, cmtId: cmtId, }, { type: type }, { new: true, upsert: true })
    //console.log("data", data)
    return data;
}

exports.getPostReaction = async (payload) => {
    const postId = payload.query.postId;
    const postExist = await PostModel.findById(postId);
    if (!postExist)
        throw new CustomError("No post exist", 401)
    const data = await ReactionModel.find({ postId: postId }).populate({ path: 'userId' });
    if (!data)
        throw new CustomError("No Reactions", 401)
    return data;
    // .populate({ path: 'sender', select: ['email', 'name', 'image', 'title'] });
}

exports.getCommentReaction = async (payload) => {
    const cmtId = payload.query.cmtId;
    //console.log('cmtId: ', cmtId);
    const cmtExist = await CommentsnModel.findById(cmtId);
    // //console.log('cmtExist: ', cmtExist);
    if (!cmtExist)
        throw new CustomError("No comment exist", 401)
    const data = (await ReactionModel.find({ cmtId: cmtId }));
    if (!data)
        throw new CustomError("No Reactions", 401)
    return data;
}

exports.deleteReaction = async (payload) => {
    const { rxnId } = payload.params;
    const userId = payload.userId;

    const reaction = await ReactionModel.findById(rxnId);
    //console.log('reaction: ', reaction);
    if (!reaction)
        throw new CustomError("No reaction exist for this id", 401)
    if (reaction.userId == userId) {
        const output = await ReactionModel.findByIdAndDelete(rxnId);
        return output;
    }
    throw new CustomError("Invalid User", 401)
}

exports.updateReaction = async (payload) => {
    const { rxnId } = payload.params;
    const userId = payload.query.userId;
    const { type } = payload.body
    if (userId)
        throw new CustomError("Bad Request", 404)
    const reaction = await ReactionModel.findById(rxnId);
    if (!reaction)
        throw new CustomError("No reaction exist for this id", 401)
    if (reaction.userId == userId && type) {
        const output = await ReactionModel.findByIdAndUpdate(rxnId, { type: type }, { new: true });
        return output;
    }
    throw new CustomError("Invalid User", 401)
}