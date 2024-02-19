const express = require('express');
const router = express.Router();

router.use("/", require("./authRoutes"))
router.use("/post/:postId/comments", require("./commentRoutes"))
router.use("/posts", require("./postRoutes"))
router.use('/profile/:userId', require('./userRoutes'))
router.use('/', require('./reactionRoutes'))

module.exports = router;