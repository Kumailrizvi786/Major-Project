import User from '../models/UserModel.js';
import Role from '../models/RoleModel.js';
import Result from '../models/ResultModel.js';
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res, next) => {
    try {
        //already exists
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(400).send({
                message: "User Already Exists"

            })
        }
        //create new user
        const createdUserObject = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            age: null,
            city: null,
            isEmailVerified: false,
            isMFAEnabled: false,
            role: await Role.findOne({ name: req.body.role }),
        })
        const responseObject = {
            name: createdUserObject.name,
            email: createdUserObject.email,
            role: createdUserObject.role
        }
        return res.status(200).json(responseObject)
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
                userEmail: user.email,
                // user: user,
                success: true,
                // token: token,
            })
            console.log("User Logged In ");
        } else if (!user) {
            res.status(401).send("User Not Found With Email ", email)
        } else {
            res.status(401).send("Passowrd Not Matched");
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

//get All details of User
export const getAllDetails = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(404).json({ message: "No Email Found" });
        }

        const userObject = await User.findOne({ email: email })
        if (!userObject) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const userResult = await getResultsByUserId(userObject._id);
        console.log("User Result " + userResult);

        //setting resoponse object
        const initialResponseObject = {
            name: "",
            email: "",
            isEmailVerified: false,
            isMFAEnabled: false,
            city: "",
            age: ""
        }

        //Setting response object
        const response = setResponseObject(initialResponseObject, userObject, userResult);
        console.log("Response "+ response);

        return res.status(200).json(response);

    } catch (err) {
        console.error(err);
        return res.status(404).json({ message: err.message });
    }
}
const getResultsByUserId = async (userId) => {
    // Get results for user
    try {
        // Validate the user ID (optional)
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID');
        }

        // Use populate to fetch results with their associated user data
        const results = await Result.find({ user: userId })
            .populate('user', 'name email'); // Specify user fields to populate

        return results;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw for proper error handling
    }
}

const setResponseObject = (initialResponseObject, userObject, userResult) => {
    initialResponseObject.name = userObject.name;
    initialResponseObject.email = userObject.email;
    initialResponseObject.isEmailVerified = userObject.isEmailVerified;
    initialResponseObject.isMFAEnabled = userObject.isMFAEnabled;
    initialResponseObject.age = userObject.age;
    initialResponseObject.city = userObject.city;
    initialResponseObject.result = userResult;
    return initialResponseObject; 
}