import User from '../models/UserModel.js'
import Role from '../models/RoleModel.js'
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res, next) => {
    try {
        //already exists
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(400).send("User already exists")
        }
        //create new user
        const createdUserObject = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            role: await Role.findOne({ name: req.body.role }),
        })

        res.status(200).json(createdUserObject)
    } catch (error) {
        console.error(error);
    }

}

