const CustomError = require('../libs/error');
const { connectionService } = require('../services');

exports.sendRequest = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await connectionService.sendRequest({ userId: req.user.ID, body: req.body })
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.getFriends = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await connectionService.getFriends({ userId: req.user.ID })
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.getSuggestions=async(req,res)=>{
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await connectionService.getSuggestions({ userId: req.user.ID})
        return res.status(201).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.updateRelation=async(req,res)=>{
    try {
        if (!res.locals.isAuthenticated)
            throw new CustomError("User not Authenticated", 400);
        const response = await connectionService.updateRelation({ userId: req.user.ID,query:req.query,body:req.body})
        return res?.status(201)?.json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}