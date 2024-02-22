import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

//check and verify token
export const checkAuth = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "No Token, Authorization Denied" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
}

