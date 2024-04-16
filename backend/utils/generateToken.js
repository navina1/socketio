import jwt from "jsonwebtoken";

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15days"
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, // 15 days in milliseconds
        httpOnly:true,//it means the cookie only accessible through HTTP(not JS) and not to JavaScript code on the 
        sameSite:true,
        secure:process.env.NODE_ENV !=="development"
    })
}

export default generateTokenAndSetCookie;