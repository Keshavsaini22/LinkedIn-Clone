const CustomError = require('../libs/error');
const { notificationService } = require('../service');

exports.createNotification = async (req, res) => {
    try {
        const response = await notificationService.createNotification({ body: req.body,query:req.query });
        // if (!response)
        //     throw new CustomError("User not created", 500);
        return res.status(201).json({ message: "success" })
    }
    catch (e) {
        //console.log('e: ', e.message);
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}