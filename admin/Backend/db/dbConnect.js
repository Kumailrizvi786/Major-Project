import mongoose from 'mongoose';
import { DB_NAME } from '../utils/constants.js';
// import {Post, Role, User} from "../models/index.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n DB Connected, \n DB_HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR While Connecting to Database ", error);
        process.exit(1);
    }
}

export default connectDB;