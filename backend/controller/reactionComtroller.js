const { reactionService } = require('../services')

exports.postPostReactionController = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await reactionService.postPostReaction({ params: req.params, userId: req.user.ID, body: req.body });
        return res.status(201).json(response)
    }
    catch (e) {
        console.log("error in PostReaction ", e)
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.postCommentReactionController = async (req, res) => {
    try {
        const response = await reactionService.postCommentReaction({ params: req.params, query: req.query, body: req.body });
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.getPostReactionController = async (req, res) => {
    try {
        const response = await reactionService.getPostReaction({ query: req.query });
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.getCommentReactionController = async (req, res) => {
    try {
        const response = await reactionService.getCommentReaction({ params: req.params });
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.deleteReaction = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await reactionService.deleteReaction({ params: req.params,userId: req.user.ID });
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.updateReaction = async (req, res) => {
    try {
        const response = await reactionService.updateReaction({ params: req.params, query: req.query, body: req.body });
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}