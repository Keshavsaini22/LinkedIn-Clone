const { reactionService } = require('../services')

exports.postPostReactionController = async (req, res) => {
    try {
        const response = await reactionService.postPostReaction(req);
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}

exports.postCommentReactionController = async (req, res) => {
    try {
        const response = await reactionService.postCommentReaction(req);
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}

exports.getPostReactionController = async (req, res) => {
    try {
        const response = await reactionService.getPostReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
        v
    }
}

exports.getCommentReactionController = async (req, res) => {
    try {
        const response = await reactionService.getCommentReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}

exports.deleteReaction = async (req, res) => {
    try {
        const response = await reactionService.deleteReaction(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
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