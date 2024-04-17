import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import Role from '../models/RoleModel.js';
import mongoose from 'mongoose';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate('role');
    if (user && (await bcrypt.compare(password, user.password)) && user.role && user.role.name === 'admin'){
      return res.status(200).json({ success: true, email: user.email, name: user.name});
    } else {
      return res.status(401).json({ "message": "Invalid username or password or Role "});
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "message": "Internal Server Error: " + err.message });
  }
}

export const update = async (req, res, next) => {
    return null;
}