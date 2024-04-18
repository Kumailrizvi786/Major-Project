import User from '../models/UserModel.js';


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