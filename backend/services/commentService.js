const CustomError = require('../libs/error');

const CommentsModel = require('../models/CommentSchema');

exports.postComments = async (req) => {
    // throw new Error("hello buddy")
    // throw new CustomError("deep",201)
    try {
        const { postId } = req.params;
        const userId = req.query.userId;
        const { body } = req.body;
        // console.log("userId",userId)
        const data = CommentsModel.create({ userId: userId, postId: postId, body: body })
        return data;
    }

    catch (e) {
        throw e;
    }
}

exports.getComments = async (req) => {
    try {
        const { postId } = req.params;
        // console.log(postId)
        const time = req.query.createdAt
        console.log('time: ', time);
        let query = { postId: postId }
        if (time) {
            query = { postId: postId, createAt: { $lt: (new Date(time)) } }
        }
        const data = await CommentsModel.find(query).limit(10).sort({ createAt: -1 })
        console.log(data, "data")
        if (data) {
            return data
        }
        else {
            throw ("No data found")
        }
    }
    catch (e) {
        throw e
    }
}
// "2024-02-13T07:40:22.120Z"  2024-02-13T10:23:57.019Z 

exports.deleteComments = async (req) => {
    try {
        const { cmtId } = req.params;
        const userId = req.query.userId;
        const comment = await CommentsModel.findById(cmtId);
        if (comment.userId == userId) {
            const output = await CommentsModel.findByIdAndDelete(cmtId);
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

exports.updateComments = async (req) => {
    try {
        const { cmtId } = req.params;
        const userId = req.query.userId;
        const { body } = req.body
        const comment = await CommentsModel.findById(cmtId);
        console.log(comment)
        if (comment.userId == userId) {
            const output = await CommentsModel.findByIdAndUpdate(cmtId, { body: body }, { new: true })
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