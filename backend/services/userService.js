const UsersModel = require('../models/UserSchema')
const CustomError = require('../libs/error');

exports.updateUserProfile = async (payload) => {
    const { userId } = payload.params;
    const { name, phone, website, languages, title, desc, industry, city, country } = payload.data;
    var query = {
        name, address: { city, country },
        phone, website, title, desc, industry, languages
    }
    if (payload.files.image) {
        const image = payload.files.image[0]?.path;
        query = {
            name, address: { city, country },
            phone, website, title, desc, industry, languages, image
        }
    }

    const data = await UsersModel.findByIdAndUpdate(userId, query, { new: true });
    return data;
}

