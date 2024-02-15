const express = require('express');
const router = express.Router();

router.use("/", require("./authRoutes"))
router.use("/", require("./commentRoutes"))
router.use("/", require("./postRoutes"))
router.use('/', require('./userRoutes'))
router.use('/', require('./reactionRoutes'))

module.exports = router;