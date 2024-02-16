const ReactionModel = require('../models/ReactionSchema');
const PostModel = require('../models/PostSchema');
const CommentsnModel = require('../models/ReactionSchema');

const CustomError = require('../libs/error');

exports.postPostReaction = async (payload) => {
    const { postId } = payload.params;
    const userId = payload.query.userId;
    const { type } = payload.body;
    if (userId && type) {
        const data = ReactionModel.create({ userId: userId, postId: postId, type: type })
        return data;
    }
    throw new CustomError("Bad Request", 404)
}

exports.postCommentReaction = async (payload) => {
    const { cmtId } = payload.params;
    const userId = payload.query.userId;
    const { type } = payload.body;
    if (userId && type) {
        const data = ReactionModel.create({ userId: userId, cmtId: cmtId, type: type })
        return data;
    }
    throw new CustomError("Bad Request", 404)
}

exports.getPostReaction = async (payload) => {
    const { postId } = payload.params;
    const postExist = await PostModel.findById(postId);
    if (!postExist)
        throw new CustomError("No post exist", 401)
    const data = (await ReactionModel.find({ postId: postId }));
    if (!data)
        throw new CustomError("No Reactions", 401)
    return data.length;
}

exports.getCommentReaction = async (payload) => {
    const { cmtId } = payload.params;
    const cmtExist = await CommentsnModel.findById(cmtId);
    if (!cmtExist)
        throw new CustomError("No comment exist", 401)
    const data = (await ReactionModel.find({ cmtId: cmtId }));
    if (!data)
        throw new CustomError("No Reactions", 401)
    return data;
}

exports.deleteReaction = async (payload) => {
    const { rxnId } = payload.params;
    const userId = payload.query.userId;
    if (!userId)
        throw new CustomError("Bad Request", 404)
    const reaction = await ReactionModel.findById(rxnId);
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