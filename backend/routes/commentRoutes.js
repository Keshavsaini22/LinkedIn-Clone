const express = require('express');
const router = express.Router();
const { commentController } = require('../controller');
const authenticateJWT = require('../middleware/authMiddleware');

router.post('/',authenticateJWT,commentController.postComments);
router.get('/',authenticateJWT,commentController.getComments);
router.delete('/:cmtId',authenticateJWT,commentController.deleteComments);
router.put('/:cmtId',authenticateJWT,commentController.updateComments);

module.exports = router;