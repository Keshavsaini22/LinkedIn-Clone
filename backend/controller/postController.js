const { postService } = require("../services")

exports.createPost = async (req, res) => {
    try {
        const response = await postService.createPost({params:req.params,files:req.files,body:req.body});
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.fetchPosts = async (req, res) => {
    try {
        const response=await postService.fetchPosts({params:req.params});
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.deletePost=async(req,res)=>{
    try {
        const response=await postService.deletePost({params:req.params,query:req.query});
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.updatePost=async(req,res)=>{
    try {
        const response=await postService.updatePost({params:req.params,query:req.query,body:req.body});
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}