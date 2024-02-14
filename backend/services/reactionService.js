const ReactionModel = require('../models/Reaction');
const CustomError = require('../libs/error');

exports.postPostReaction = async (req) => {
    const { postId } = req.params;
    const userId = req.query.userId;
    const type = req.body;
    if (userId && type) {
        const data = ReactionModel.create({ userId: userId, postId: postId, type: type })
        return data;
    }
    throw new CustomError("Bad Request", 404)
}

exports.postCommentReaction = async (req) => {
    const { cmtId } = req.params;
    const userId = req.query.userId;
    const type = req.body;
    if (userId && type) {
        const data = ReactionModel.create({ userId: userId, cmtId: cmtId, type: type })
        return data;
    }
    throw new CustomError("Bad Request", 404)
}

exports.getPostReaction = async (req) => {
    const { postId } = req.params;
    const data = (await ReactionModel.find({ postId: postId })).length;
    return data;
}

exports.getCommentReaction = async (req) => {
    const { cmtId } = req.params;
    const data = (await ReactionModel.find({ cmtId: cmtId })).length;
    return data;
}

exports.deleteReaction = async (req) => {
    const { rxnId } = req.params;
    const userId = req.query.userId;
    if (userId) {
        const reaction = await ReactionModel.findById(rxnId);
        if (reaction.userId == userId) {
            const output = await ReactionModel.findByIdAndDelete(rxnId);
            return output;
        }
        throw new CustomError("Invalid User", 401)
    }
    throw new CustomError("Bad Request", 404)
}

exports.updateReaction = async (req) => {
    const { rxnId } = req.params;
    const userId = req.query.userId;
    const { type } = req.body
    if (userId) {
        const reaction = await ReactionModel.findById(rxnId);
        if (reaction.userId == userId && type) {
            const output = await ReactionModel.findByIdAndUpdate(rxnId, { type: type }, { new: true });
            return output;
        }
        throw new CustomError("Invalid User", 401)
    }
    throw new CustomError("Bad Request", 404)
}