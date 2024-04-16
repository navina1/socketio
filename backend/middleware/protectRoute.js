import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute=async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"You are not logged in!"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"Unauthorised or invalid token"});
        }
        const user=await User.findById(decoded.userId).select("-password");
        if(!user) {
            return res.status(401).json({msg: "User no longer exists."})
        }
        req.user=user;
        next();
    }catch(error){
        res.json(500).json({error:"Internal server error"})
    }
}
export default protectRoute;