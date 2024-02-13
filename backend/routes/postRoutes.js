const express = require('express');
const router = express.Router();
const multer = require('multer')


const PostModel = require('../models/PostSchema')
const authenticateJWT = require('../middleware/authMiddleware')
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'images' }])


router.post('/posts/:userId', uploadmiddleware, async (req, res) => {
    const { userId } = req.params;
    const images = req.files.images.map((i) => { return i.path });
    const { title, body } = req.body
    // console.log("imagessss", images)
    // console.log("title",title)
    // console.log("body",body)
    // console.log('userId',userId)
    try {
        const data = await PostModel.create({ userId: userId, title: title, body: body, images: images });
        console.log("post data", data)
        res.status(200).json(data)
    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.get('/posts/:userId', async (req, res) => {
    const { userId } = req.params;
    console.log("get posts");
    try {
        const data = await PostModel.find({ userId: userId })
        console.log(data)
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.status(400).json("No data found")
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete('/posts/:postId',async(req,res)=>{
    const {postId}= req.params;
    // console.log(postId)
    try{
        const data=await PostModel.findByIdAndDelete(postId,{new: true})
        console.log("data",data)     
        res.status(200).json(data)  
    }
    catch(e){
        res.status(500).json(e)
    }

})

router.put('/posts/:postId',async(req,res)=>{
    const {postId}= req.params;
    const {title , body}=req.body;
    // console.log(title,body)
    try{
        const data=await PostModel.findByIdAndUpdate(postId,{title,body},{new: true})
        console.log(data)
        res.status(200).json(data)  
    }catch(e){
        res.status(500).json(e)
    }
})

module.exports = router;