import dotenv from 'dotenv'
import connectDB from "./db/dbConnect.js"
import express from 'express'
import loginRoutes from './routes/loginRoutes.js'
import bodyParser from 'body-parser';


dotenv.config({
    path: './env'
})
connectDB(); //connecting to DataBase

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get("/sayHello", (req, res) => {
    res.send("Hello World");
    }
);

app.use('/login',loginRoutes)

app.listen(process.env.PORT || 8081, () => {
    console.log(`Server is running on port ${process.env.PORT || 8081} url is http://localhost:${process.env.PORT || 8081}/sayHello`);
    }
);
