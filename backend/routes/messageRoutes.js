const authenticateJWT = require('../middleware/authMiddleware');
const { messageController } = require('../controller');

const router = require('express').Router();
router.get('/', authenticateJWT, messageController.getMessages)
router.post('/', authenticateJWT, messageController.sendMessage)
module.exports = router;