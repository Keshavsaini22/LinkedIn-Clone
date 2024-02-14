const { authService } = require("../services")

exports.signupUser = async (req, res) => {
    try {
        const response = await authService.signupUser(req);
        if (!response)
            throw new Error("User not created", 500);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code).json({ message: e?.message })
    }
}

exports.signinUser = async (req, res) => {
    try {
        const response = await authService.signinUser(req);
        if (!response)
            throw new Error("Token not created", 500);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code).json({ message: e?.message })
    }
}