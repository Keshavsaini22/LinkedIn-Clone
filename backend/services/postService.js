const PostModel = require('../models/PostSchema')
const CustomError = require('../libs/error');

exports.createPost = async (req) => {
    const { userId } = req.params;
    const images = req.files.images.map((i) => { return i.path });
    const { title, body } = req.body
    if (userId) {
        if (images, title, body) {
            const data = await PostModel.create({ userId: userId, title: title, body: body, images: images });
            return data;
        }
        throw new CustomError("Empty fields", 401);

    }
    throw new CustomError("Bad request", 404);
}

exports.fetchPosts = async (req) => {
    const { userId } = req.params;
    if (userId) {
        const data = await PostModel.find({ userId: userId });
        if (data) {
            return data;
        }
        throw new CustomError("No data found", 204);
    }
    throw new CustomError("Bad request", 404);
}

exports.deletePost = async (req) => {
    const { postId } = req.params;
    if (postId) {
        const data = await PostModel.findByIdAndDelete(postId,)
        if (data) {
            return data
        }
        throw new CustomError("No post found", 204);
    }
    throw new CustomError("Bad request", 404);
}

exports.updatePost = async (req) => {
    const { postId } = req.params;
    const { title, body } = req.body;
    if (postId) {
        if (title || body) {
            const data = await PostModel.findByIdAndUpdate(postId, { title, body }, { new: true })
            return data;
        }
        throw new CustomError("Empty fields", 401);
    }
    throw new CustomError("Bad request", 404);
}