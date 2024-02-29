const UsersModel = require('../models/UserSchema')
const CustomError = require('../libs/error');

exports.updateUserProfile = async (payload) => {
    const { userId } = payload.params;
    
    const image = payload.files.image[0]?.path;
    const { name, phone, website, languages, title, desc, industry, city, country } = payload.data;
    console.log(city)
    // if (req.body.address) {
    //     var { city, country } = JSON.parse(payload.data.address)
    // }
    const data = await UsersModel.findByIdAndUpdate(userId, {
        name, address: { city, country },
        phone, website, image, title, desc, industry, languages
    }, { new: true });
    return data;
}

