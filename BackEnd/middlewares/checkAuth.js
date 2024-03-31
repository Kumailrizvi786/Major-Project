import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

//check and verify token
export const checkAuth = async (req, res, next) => {
    try {
        let authHeader = req.headers.Authorization;
        if (!authHeader) {
            return res.status(401).json({ message: " Authorization Header Missing, Access Denied" });
        }

        const token = authHeader.split('')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);
        //chcek that user is authenticated
        if (!req.user) {
            return res.status(401).json({ message: "No User Found" });
        }
        //user password should not go in the cookie
        req.user.password = undefined;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
}

