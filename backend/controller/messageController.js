const CustomError = require('../libs/error');
const { messageService } = require('../services');

exports.sendMessage = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await messageService.sendMessage({ userId: req.user.ID, body: req.body });
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.getMessages = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await messageService.getMessages({  query: req.query });
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}
