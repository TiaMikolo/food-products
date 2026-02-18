import jwt from 'jsonwebtoken'

export const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1]//ex : ["Bearer", "TOKEN"] => take TOKEN
    if (!token) return res.status(401).json({message: 'Unauthorized'})

    try{
        const decoded = jwt.verify(token, 'your_secret_key')//verify token
        req.user = decoded//add user info to request
        next()
    }catch{
        return res.status(401).json({message: 'Unauthorized'})
    }
}