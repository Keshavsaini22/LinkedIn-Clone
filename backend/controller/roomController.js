const CustomError = require('../libs/error');
const { roomService } = require('../services')

exports.addRoom = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await roomService.createRoom({ userId: req.user.ID, body: req.body });
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}