const express = require('express');
const router = express.Router();
const multer = require('multer')

const UsersModel = require('../models/UserSchema')
const authenticateJWT = require('../middleware/authMiddleware')
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'image' }])


router.put('/profile/:userId', uploadmiddleware, async (req, res) => {
    const { userId } = req.params;
    console.log("userId", userId)
    const image = req.files.image[0].path
    const { name, phone, website, languages, title, desc, industry } = req.body;
    const address = JSON.parse(req.body.address)
    // console.log(name, phone, website, languages, title, desc, industry)
    // console.log(image)
    // console.log(address?.geo.lat)
    try {
        const data = await UsersModel.findByIdAndUpdate(userId, {
            name: name, address: { street: address.street, state: address.state, city: address.city, pincode: address.pincode, country: address.country },
            phone: phone, website: website, image: image, title: title, desc: desc, industry: industry,languages:languages
        })
        console.log("Data", data)
        res.status(200).json(data)
    }
    catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router;