import User from '../models/UserModel.js'
import Role from '../models/RoleModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res, next) => {
    try {
        //already exists
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(400).send("User already exists")
        }

        //jwt token options
        const options = {
            expiresIn: 86400, // 24 hours
        }

        //create new user
        const createdUserObject = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            role: await Role.findOne({ name: req.body.role }),
        })

        const jwtToken = jwt.sign({ id: createdUserObject._id }, process.env.JWT_SECRET, options);
        //add token to user object
        createdUserObject.token = jwtToken;
        createdUserObject.password = undefined; //remove password from user object before sending to client

        res.status(200).json(createdUserObject)
    } catch (error) {
        console.error("Error Occured in Registration =>  ", error);
    }

}

