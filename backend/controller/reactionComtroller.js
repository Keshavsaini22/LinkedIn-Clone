const { reactionService } = require('../services')

exports.postPostReactionController = async (req, res) => {
    try {
        const response = await reactionService.postPostReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json(e)
    }
}

exports.postCommentReactionController = async (req, res) => {
    try {
        const response = await reactionService.postCommentReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json(e)
    }
}

exports.getPostReactionController = async (req, res) => {
    try {
        const response = await reactionService.getPostReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json(e)
    }
}

exports.getCommentReactionController = async (req, res) => {
    try {
        const response = await reactionService.getCommentReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json(e)
    }
}

exports.deleteReaction = async (req, res) => {
    try {
        const response = await reactionService.deleteReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json(e)
    }
}

exports.updateReaction = async (req, res) => {
    try {
        const response = await reactionService.updateReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json(e)
    }
}