const express = require('express');
const router = express.Router();
const multer = require('multer')
const authenticateJWT = require('../middleware/authMiddleware');
const { postController } = require('../controller');
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'images' }])

router.post('/',authenticateJWT, uploadmiddleware, postController.createPost)
router.get('/', postController.fetchPosts)
router.delete('/:postId',authenticateJWT, postController.deletePost)
router.put('/:postId',authenticateJWT, postController.updatePost)

module.exports = router;


// router.post('/posts/:userId', uploadmiddleware, async (req, res) => {
//     const { userId } = req.params;
//     const images = req.files.images.map((i) => { return i.path });
//     const { title, body } = req.body
//     // //console.log("imagessss", images)
//     // //console.log("title",title)
//     // //console.log("body",body)
//     // //console.log('userId',userId)
//     try {
//         const data = await PostModel.create({ userId: userId, title: title, body: body, images: images });
//         //console.log("post data", data)
//         res.status(200).json(data)
//     }
//     catch (e) {
//         res.status(500).json(e)
//     }
// })