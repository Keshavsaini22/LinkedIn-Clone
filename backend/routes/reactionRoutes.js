const express = require('express');
const router = express.Router();
const {reactionController}= require('../controller')

router.post('/post/:postId',reactionController.postPostReactionController);
router.post('/comment/:cmtId',reactionController.postCommentReactionController);
router.get('/post/:postId',reactionController.getPostReactionController);
router.get('/comment/:cmtId',reactionController.getCommentReactionController);
router.delete('/reaction/:rxnId',reactionController.deleteReaction);
router.put('/reaction/:rxnId',reactionController.updateReaction);

module.exports = router;