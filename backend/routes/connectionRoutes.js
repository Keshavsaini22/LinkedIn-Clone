const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authMiddleware');
const { connectionController } = require('../controller');

router.post('/', authenticateJWT, connectionController.sendRequest)
router.get('/', authenticateJWT, connectionController.getFriends)
router.get('/suggestions', authenticateJWT, connectionController.getSuggestions)
router.put('/', authenticateJWT, connectionController.updateRelation)
module.exports = router;