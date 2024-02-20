const CustomError = require('../libs/error');

const CommentsModel = require('../models/CommentSchema');

exports.postComments = async (payload) => {
    const { postId } = payload.params;
    const userId = payload.query.userId;
    const { body } = payload.body;
    if (!userId)
        throw new CustomError("Bad Request", 404)
    if (!body)
        throw new CustomError("No data in input", 401)
    const data = CommentsModel.create({ userId: userId, postId: postId, body: body })
    return data;
}

exports.getComments = async (payload) => {
    const { postId } = payload.params;
    const time = payload.query.createdAt
    let query = { postId: postId }
    if (time) {
        query = { postId: postId, createAt: { $lt: (new Date(time)) } }
    }
    const data = await CommentsModel.find(query).limit(10).sort({ createdAt: -1 })
    if (!data)
        throw new CustomError("No data found", 204);
    return data
}
// "2024-02-13T07:40:22.120Z"  2024-02-13T10:23:57.019Z 

exports.deleteComments = async (payload) => {
    const { cmtId } = payload.params;
    const userId = payload.query.userId;
    if (!userId)
        throw new CustomError("Bad Request", 404)
    const comment = await CommentsModel.findById(cmtId);
    if (!comment)
        throw new CustomError("No comment exist", 401)
    if (comment.userId == userId) {
        const output = await CommentsModel.findByIdAndDelete(cmtId);
        return output;
    }
    throw new CustomError("Invalid User", 401)
}

exports.updateComments = async (req) => {
    const { cmtId } = req.params;
    const userId = req.query.userId;
    // if(!userId) throw CustomError("user id not define")
    const { body } = req.body
    if (!userId)
        throw new CustomError("Bad Request", 404)
    if (!body)
        throw new CustomError("Body is not defined", 404)
    const comment = await CommentsModel.findById(cmtId);
    if (!comment)
        throw new CustomError("No comment exist", 401)
    if (comment.userId == userId) {
        const output = await CommentsModel.findByIdAndUpdate(cmtId, { body: body }, { new: true })
        return output;
    }
    throw new CustomError("Invalid User", 401)
}