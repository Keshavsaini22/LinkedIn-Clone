const UsersModel = require('../models/UserSchema')
const CustomError = require('../libs/error');

exports.updateUserProfile = async (req) => {
    const { userId } = req.params;
    if (userId) {
        const image = req.files.image[0].path;
        const { name, phone, website, languages, title, desc, industry } = req.body;
        const address = JSON.parse(req.body.address)
        const data = await UsersModel.findByIdAndUpdate(userId, {
            name: name, address: { street: address.street, state: address.state, city: address.city, pincode: address.pincode, country: address.country },
            phone: phone, website: website, image: image, title: title, desc: desc, industry: industry, languages: languages
        }, { new: true });
        return data;
    }
    throw new CustomError("Bad request", 404);

}