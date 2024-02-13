const express = require('express');
const router = express.Router();
const { commentController } = require('../controller');



router.post('/post/:postId/comments',commentController.postComments)
router.get('/post/:postId/comments',commentController.getComments)
router.delete('/post/:postId/comments/:cmtId',commentController.deleteComments)
router.put('/post/:postId/comments/:cmtId',commentController.updateComments)


module.exports = router;