const express = require('express');
const router = express.Router();
const {reactionController}= require('../controller');
const authenticateJWT = require('../middleware/authMiddleware');

router.post('/post/:postId/reaction',authenticateJWT,reactionController.postPostReactionController);
router.post('/comment/:cmtId/reaction',authenticateJWT,reactionController.postCommentReactionController);
router.get('/post/:postId/reaction',authenticateJWT,reactionController.getPostReactionController);
router.get('/comment/:cmtId/reaction',authenticateJWT,reactionController.getCommentReactionController);
router.delete('/reaction/:rxnId',authenticateJWT,reactionController.deleteReaction);
router.put('/reaction/:rxnId',authenticateJWT,reactionController.updateReaction);

module.exports = router;