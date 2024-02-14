const UsersModel = require('../models/UserSchema')
const CustomError = require('../libs/error');

exports.updateUserProfile = async (req) => {
    const { userId } = req.params;
    if (userId) {
        const image = req.files.image[0].path;
        const { name, phone, website, languages, title, desc, industry } = req.body;

        if (req.body.address) {
            var { street, state, city, pincode, country } = JSON.parse(req.body.address)
        }

        const data = await UsersModel.findByIdAndUpdate(userId, {
            name, address: { street, state, city, pincode, country },
            phone, website, image, title, desc, industry, languages
        }, { new: true });
        return data;
    }
    throw new CustomError("Bad request", 404);
}