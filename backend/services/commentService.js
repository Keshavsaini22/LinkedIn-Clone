const CustomError = require('../libs/error');

const CommentsModel = require('../models/CommentSchema');

exports.postComments = async (req) => {
    // throw new Error("hello buddy")
    // throw new CustomError("deep",201)
    const { postId } = req.params;
    const userId = req.query.userId;
    const { body } = req.body;
    if (userId && body) {
        const data = CommentsModel.create({ userId: userId, postId: postId, body: body })
        return data;
    }
    throw new CustomError("Bad Request", 404)
}

exports.getComments = async (req) => {
    const { postId } = req.params;
    const time = req.query.createdAt
    let query = { postId: postId }
    if (time) {
        query = { postId: postId, createAt: { $lt: (new Date(time)) } }
    }
    const data = await CommentsModel.find(query).limit(10).sort({ createAt: -1 })
    if (!data)
        throw new CustomError("No data found", 204);
    return data
}
// "2024-02-13T07:40:22.120Z"  2024-02-13T10:23:57.019Z 

exports.deleteComments = async (req) => {
    const { cmtId } = req.params;
    const userId = req.query.userId;
    if (userId) {
        const comment = await CommentsModel.findById(cmtId);
        if (comment.userId == userId) {
            const output = await CommentsModel.findByIdAndDelete(cmtId);
            return output;
        }
        throw new CustomError("Invalid User", 401)
    }
    throw new CustomError("Bad Request", 404)
}

exports.updateComments = async (req) => {
    const { cmtId } = req.params;
    const userId = req.query.userId;
    const { body } = req.body
    if (userId) {
        const comment = await CommentsModel.findById(cmtId);
        if (comment.userId == userId && body) {
            const output = await CommentsModel.findByIdAndUpdate(cmtId, { body: body }, { new: true })
            return output;
        }
        throw new CustomError("Invalid User", 401)
    }
    throw new CustomError("Bad Request", 404)
}