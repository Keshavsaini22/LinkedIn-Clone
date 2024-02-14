const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authMiddleware');
const { authController } = require('../controller');

router.post('/signup', authController.signupUser);
router.post('/signin', authController.signinUser);

// router.post('/logout', authenticateJWT, (req, res) => {
//     console.log(res.locals.isAuthenticated)
//         if (res.locals.isAuthenticated) {
//             // res.clearCookie('token');
//             res.json({ success: true, message: 'Logout successful' });
//         } else {
//             res.json({ success: false, message: 'Not logged in' });
//         }
// });


module.exports = router;