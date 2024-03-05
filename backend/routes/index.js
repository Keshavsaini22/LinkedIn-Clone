const express = require('express');
const router = express.Router();

router.use("/", require("./authRoutes"))
router.use("/comments", require("./commentRoutes"))
router.use("/posts", require("./postRoutes"))
router.use('/', require('./userRoutes'))
router.use('/', require('./reactionRoutes'))
router.use('/connection', require('./connectionRoutes'))
router.use('/room', require('./roomRoutes'));

module.exports = router;