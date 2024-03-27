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
        // const options = {
        //     expiresIn: 86400, // 24 hours
        // }

        //create new user
        const createdUserObject = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            age: req.body.age,
            city: req.body.city,
            isEmailVerified: false,
            role: await Role.findOne({ name: req.body.role }),
        })
        // const jwtToken = jwt.sign({ id: createdUserObject._id }, process.env.JWT_SECRET, options);
        //add token to user object
        // createdUserObject.token = jwtToken;
        createdUserObject.password = undefined; //remove password from user object before sending to client
        res.status(200).json(createdUserObject)
    } catch (error) {
        console.error("Error Occured in Registration =>  ", error);
    }
}

//Login
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).json({ email: email, password: password }).send("All fields are required");
        }
        // let token = req.cookies.token;
        //check for signup token and email verification

        //find user in DB from req object
        const user = await User.findOne({ email })

        if (user.isEmailVerified) {
            //if user exists, then match password
            if (user && (await bcrypt.compare(password, user.password))) {

                //token generation
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 86400 })
                user.token = token;
                user.password = undefined;

                //cookie section
                const cookieOption = {
                    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                };
                res.status(200).cookie("token", token, cookieOption).json({
                    user: user.email,
                    success: true,
                    token: token,
                })
                console.log("User Logged In ");
            } else if (!user) {
                res.status(401).send("User Not Found With Email ", email)
            } else {
                res.satus(401).send("Passowrd Not Matched");
            }
        } else {
            res.status(401).send("Email Not Verified");
        }
    }
    catch (err) {
        console.log(err);
    }
}



//Logout
export const logoutUser = async (req, res, next) => {
    // console.log(`User: ${req.cookie.user}` );
    res.clearCookie("token", "user");
    res.status(200).send("User Logged Out");
    console.log("User Log Out");
}