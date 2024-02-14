const { postService } = require("../services")

exports.createPost = async (req, res) => {
    try {
        const response = await postService.createPost(req);
        if (!response)
            throw new CustomError("User not created", 500);
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code).json({ message: e?.message })
    }
}

exports.fetchPosts = async (req, res) => {
    try {
        const response=await postService.fetchPosts(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}

exports.deletePost=async(req,res)=>{
    try {
        const response=await postService.deletePost(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}

exports.updatePost=async(req,res)=>{
    try {
        const response=await postService.updatePost(req);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code ?? 500).json({ message: e?.message })
    }
}