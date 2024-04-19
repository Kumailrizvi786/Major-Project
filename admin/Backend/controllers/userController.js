import User from '../models/UserModel.js';
import Role from '../models/RoleModel.js';
import bcrypt from 'bcryptjs';


export const getUserByEmail = async (req,res) => {
    try{
        const {email} = req.params;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        user.password = undefined;

        return res.status(200).json(user);
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

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
        const fetchedRole = await Role.findOne({ name: role });
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


export const updateUser = async (req, res) => {
    try {
        const { email } = req.body; // email cannot be changed
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updates = {
            ...(req.body.name && { name: req.body.name }),
            ...(req.body.password && { password: bcrypt.hashSync(req.body.password, 8) }),
            ...(req.body.city && { city: req.body.city }),
            ...(req.body.age && { age: req.body.age }),
            ...(req.body.isEmailVerified !== undefined && { isEmailVerified: req.body.isEmailVerified }),
            ...(req.body.isMFAEnabled !== undefined && { isMFAEnabled: req.body.isMFAEnabled }),
            ...(req.body.role && { role: await Role.findOne({ name: req.body.role }) }),
        };
        //   console.log(updates);
        const updatedUser = await User.findByIdAndUpdate(user._id, updates, { new: true });
        updatedUser.password = undefined;
        //   console.log(updatedUser);
        return res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user by email
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete the user
        await user.deleteOne();

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};  
