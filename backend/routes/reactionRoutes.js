const express = require('express');
const router = express.Router();
const {reactionController}= require('../controller')

router.post('/post/:postId/reaction',reactionController.postPostReactionController);
router.post('/comment/:cmtId/reaction',reactionController.postCommentReactionController);
router.get('/post/:postId/reaction',reactionController.getPostReactionController);
router.get('/comment/:cmtId/reaction',reactionController.getCommentReactionController);
router.delete('/reaction/:rxnId',reactionController.deleteReaction);
router.put('/reaction/:rxnId',reactionController.updateReaction);

module.exports = router;