const CustomError = require('../libs/error');

const CommentsModel = require('../models/CommentSchema');
const { post } = require('../routes/authRoutes');

exports.postComments = async (req) => {
    // throw new Error("hello buddy")
    // throw new CustomError("deep",201)
    try {
        const { postId } = req.params;
        const  userId  = req.query.userId;
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
        const data = await CommentsModel.find({ postId: postId })
        console.log(data,"data")
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

exports.deleteComments = async (req) => {
    try {
        const { cmtId } = req.params;
        const  userId  = req.query.userId;
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
        const  userId  = req.query.userId;
        const { body } = req.body
        const comment = await CommentsModel.findById(cmtId);
        console.log(comment)
        if (comment.userId == userId) {
            const output = await CommentsModel.findByIdAndUpdate(cmtId, { body: body },{new:true})
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