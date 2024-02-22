import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import jwt from 'jsonwebtoken'

//login user
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).json({ email: email, password: password }).send("All input is required");
        }
        //find user in DB from req object
        const user = await User.findOne({ email })


        //if user exists, then match password
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 86400 })
            user.token = token;
            user.password = undefined;

            //cookie section
            const cookieOption = {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };
            res.status(200).cookie("token", token, cookieOption).json({
                success: true,
                token: token,
            })
            console.log("User Logged In ");
        } else if (!user) {
            res.status(401).send("User Not Found With Email ", email)
        } else {
            res.satus(401).send("Passowrd Not Matched");
        }
    }
    catch (err) {
        console.log(err);
    }
}

//logout user
export const logoutUser = async (req, res, next) => {
    res.clearCookie("token");
    res.status(200).send("User Logged Out");
    console.log("User Log Out");
}