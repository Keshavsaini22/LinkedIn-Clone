const { userService } = require("../services")

exports.updateUserProfile = async (req, res) => {
    try {
        const response = await userService.updateUserProfile({params:req.params,files:req.files,data:req.body});
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}