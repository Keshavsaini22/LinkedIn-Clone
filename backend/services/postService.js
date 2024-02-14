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
        const data = await PostModel.find({ userId: userId }).populate('userId', 'name');
        if (data) {
            return data;
        }
        throw new CustomError("No data found", 204);
    }
    throw new CustomError("Bad request", 404);
}

exports.deletePost = async (req) => {
    const { postId } = req.params;
    const userId = req.query.userId;
    if (userId) {
        const post = await PostModel.findById(postId);
        if (post.userId == userId) {
            const data = await PostModel.findByIdAndDelete(postId)
            return data;
        }
        throw new CustomError("Invalid User", 401)
    }
    throw new CustomError("Bad Request", 404)
}

exports.updatePost = async (req) => {
    const { postId } = req.params;
    const userId = req.query.userId;
    const { title, body } = req.body;
    if (userId) {
        const post = await PostModel.findById(postId);
        if (post.userId == userId && (title || body)) {
            const data = await PostModel.findByIdAndUpdate(postId, { title, body }, { new: true })
            return data;
        }
        throw new CustomError("Invalid User", 401)
    }
    throw new CustomError("Bad Request", 404)
}