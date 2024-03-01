const { commentService } = require("../services")

exports.postComments = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await commentService.postComments({ userId: req.user.ID, body: req.body });
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json(e.message)
    }
}

exports.getComments = async (req, res) => {
    try {
        const response = await commentService.getComments({ params: req.params, query: req.query });
        //console.log(response, "response")
        return res.status(200).json(response)
    } catch (e) {
        return res.status(e?.code || 500).json(e.message)
    }
}

exports.deleteComments = async (req, res) => {
    try {
        const response = await commentService.deleteComments({ params: req.params, query: req.query });
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json(e.message)
    }
}

exports.updateComments = async (req, res) => {
    try {
        const response = await commentService.updateComments({ params: req.params, query: req.query, body: req.body });
        return res.status(200).json(response)
    } catch (e) {
        return res.status(e?.code || 500).json(e.message)
    }
}
