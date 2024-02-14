const ReactionModel = require('../models/Reaction');
const { post } = require('../routes/authRoutes');

exports.postPostReaction = async (req) => {
    try {
        const { postId } = req.params;
        const userId = req.query.userId;
        const type = req.body;

        const data = ReactionModel.create({ userId: userId, postId: postId, type: type })
        return data;
    }
    catch (e) {
        throw e
    }
}

exports.postCommentReaction = async (req) => {
    try {
        const { cmtId } = req.params;
        const userId = req.query.userId;
        const type = req.body;

        const data = ReactionModel.create({ userId: userId, cmtId: cmtId, type: type })
        return data;
    }
    catch (e) {
        throw e
    }
}


exports.getPostReaction = async (req) => {
    try {
        const { postId } = req.params;
        const data = (await ReactionModel.find({ postId: postId })).length();
        return data;
    }
    catch (e) {
        throw e
    }
}

exports.getCommentReaction = async (req) => {
    try {
        const { cmtId } = req.params;
        const data = (await ReactionModel.find({ cmtId: cmtId })).length();
        return data;
    }
    catch (e) {
        throw e
    }
}

exports.deleteReaction = async (req) => {
    try {
        const { rxnId } = req.params;
        const userId = req.query.userId;
        const reaction = await ReactionModel.findById(rxnId);
        if (reaction.userId == userId) {
            const output = await ReactionModel.findByIdAndDelete(rxnId);
            return output;
        }
        else {
            throw "Invalid user"
        }
    }
    catch (e) {
        throw e
    }
}

exports.updateReaction = async (req) => {
    try {
        const { rxnId } = req.params;
        const userId = req.query.userId;
        const { type } = req.body
        const reaction = await ReactionModel.findById(rxnId);
        if (reaction.userId == userId) {
            const output = await ReactionModel.findByIdAndUpdate(rxnId, { type: type }, { new: true });
            return output;
        }
        else {
            throw "Invalid user"
        }
    }
    catch (e) {
        throw e
    }
}