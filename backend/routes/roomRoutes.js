const { roomController } = require('../controller');
const authenticateJWT = require('../middleware/authMiddleware');

const router = require('express').Router();

router.post('/',authenticateJWT,  roomController.addRoom)

module.exports = router;