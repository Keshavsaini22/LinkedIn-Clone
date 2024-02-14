const { authService } = require("../services")
const CustomError = require('../libs/error');

exports.signupUser = async (req, res) => {
    try {
        const response = await authService.signupUser({ data: req.body });
        if (!response)
            throw new CustomError("User not created", 500);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}

exports.signinUser = async (req, res) => {
    try {
        const response = await authService.signinUser(req);
        if (!response)
            throw new CustomError("Token not created", 500);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}