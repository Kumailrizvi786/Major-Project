import dotenv from 'dotenv'
import connectDB from "./db/dbConnect.js"
import express from 'express'

dotenv.config({
    path: './env'
})
connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

app.listen(process.env.PORT || 8081, () => {
    console.log(`Server is running on port ${process.env.PORT || 8081}`);
    }
);
