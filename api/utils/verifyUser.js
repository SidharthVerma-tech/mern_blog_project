import jwt from "jsonwebtoken";
import User from '../models/user.model.js'; 
import {errorHandler} from './error.js'
// export const verifyToken = (req, res, next) => {
//     const token = req.cookies.access_token;
//     if(!token){
//         return next(errorHandler(401, 'Unauthorized'));
//     }
//     jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
//         if(err){
//             return next(errorHandler(401, 'Unauthorized'));
//         }
//         req.user = user 
//         next()
//     })

// }
export const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token;
    console.log('Token:', token); // Log the token
    if (!token) {
        return next(errorHandler(401, 'No token provided'));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        console.log('Authenticated User:', req.user); // Log the authenticated user
        if (!req.user) {
            return next(errorHandler(404, 'User not found'));
        }
        next();
    } catch (error) {
        console.log('Token verification error:', error); // Log any token verification errors
        next(errorHandler(401, 'Token is not valid'));
    }
};


