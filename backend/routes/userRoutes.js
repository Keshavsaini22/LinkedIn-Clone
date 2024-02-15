const express = require('express');
const router = express.Router();
const multer = require('multer')
const authenticateJWT = require('../middleware/authMiddleware');
const { userController } = require('../controller');
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'image' }])

router.put('/profile/:userId', uploadmiddleware, userController.updateUserProfile);

module.exports = router;