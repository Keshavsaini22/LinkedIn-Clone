const PostModel = require('../models/PostSchema')
const UserModel = require('../models/UserSchema')
const CustomError = require('../libs/error');

exports.createPost = async (payload) => {
    const { userId } = payload.params;
    const images = payload.files.images.map((i) => { return i.path });
    const { title, body } = payload.body
    if (images && title && body) {
        const data = await PostModel.create({ userId: userId, title: title, body: body, images: images });
        return data;
    }
    throw new CustomError("Empty fields", 401);
}

exports.fetchPosts = async (payload) => {
    const { userId } = payload.params;
    const userExist = await UserModel.findById(userId)
    if (!userExist)
        throw new CustomError("No User found", 401);
    const data = await PostModel.find({ userId: userId }).populate('userId', 'name');
    if (!data)
        throw new CustomError("No data found", 204);
    return data;
}


exports.deletePost = async (payload) => {
    const { postId } = payload.params;
    const userId = payload.query.userId;
    if (!userId)
        throw new CustomError("Bad Request", 404)
    const post = await PostModel.findById(postId);
    if (!post)
        throw new CustomError("No post exist", 401)
    if (post.userId == userId) {
        const data = await PostModel.findByIdAndDelete(postId)
        return data;
    }
    throw new CustomError("Invalid User", 401)
}

exports.updatePost = async (payload) => {
    const { postId } = payload.params;
    const userId = payload.query.userId;
    const { title, body } = payload.body;
    if (!userId)
        throw new CustomError("Bad Request", 404)
    const post = await PostModel.findById(postId);
    if (!post)
        throw new CustomError("No post exist", 401)
    if (post.userId == userId && (title || body)) {
        const data = await PostModel.findByIdAndUpdate(postId, { title, body }, { new: true })
        return data;
    }
    throw new CustomError("Invalid User", 401)
}