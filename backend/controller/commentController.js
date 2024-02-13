const { commentService } = require("../services")

exports.postComments = async (req, res) => {
    try {
        const response = await commentService.postComments(req);
        return res.status(200).json(response)
    }
    catch (e) {
        // return res.status(e?.code ?? 500).send(e.message)
        return res.status(500).json(e)
    }
}

exports.getComments = async (req, res) => {
    try {
        const response = await commentService.getComments(req);
        console.log(response, "response")
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json(e)
    }
}

exports.deleteComments = async (req, res) => {
    try {
        const response = await commentService.deleteComments(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json(e)
    }
}

exports.updateComments = async (req, res) => {
    try {
        const response = await commentService.updateComments(req);
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json(e)
    }
}