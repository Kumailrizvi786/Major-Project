import User from '../models/UserModel.js';
import Role from '../models/RoleModel.js';
import bcrypt from 'bcryptjs';


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('role');
        if (!users) {
            return res.status(404).json({ message: 'No Record found' })
        }
        users.forEach(user => {
            user.password = undefined;
        });
        return res.status(200).json(users);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error " + err.message });
    }
}


export const createUser = async (req, res) => {
    try {
        const { name, email, password, city, role, age } = req.body;
        //already exists
        const user = await User.findOne({ email: req.body.email })
        const fetchedRole = await Role.findOne({name: role});
        if (user || !fetchedRole) {
            return res.status(400).json({
                message: "User Already Exists OR Role Not Found",

            })
        }
        //create new user
        const createdUserObject = await User.create({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 8),
            age: null,
            city: null,
            isEmailVerified: false,
            isMFAEnabled: false,
            role: await Role.findOne({ name: role }),
        })
        const responseObject = {
            name: createdUserObject.name,
            email: createdUserObject.email,
            role: createdUserObject.role
        }
        return res.status(200).json(responseObject);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error " + err.message });
    }
}