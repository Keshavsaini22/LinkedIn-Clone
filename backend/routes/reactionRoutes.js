const express = require('express');
const router = express.Router();
const { reactionController } = require('../controller');
const authenticateJWT = require('../middleware/authMiddleware');

router.post('/reaction/post/:postId', authenticateJWT, reactionController.postPostReactionController);
router.post('/reaction/comment/:cmtId', authenticateJWT, reactionController.postCommentReactionController);
router.get('/reaction/post', reactionController.getPostReactionController);
router.get('/reaction/comment/:cmtId', reactionController.getCommentReactionController);
router.delete('/reaction/:rxnId',authenticateJWT, reactionController.deleteReaction);
router.put('/reaction/:rxnId', authenticateJWT, reactionController.updateReaction);

module.exports = router;