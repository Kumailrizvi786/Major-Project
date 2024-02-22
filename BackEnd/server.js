import dotenv from 'dotenv'
import connectDB from "./db/dbConnect.js"
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import {routes} from './routes/indexRoutes.js'
import cookieParser from 'cookie-parser'

dotenv.config({
    path: './env'
})
connectDB(); //connecting to DataBase

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
routes(app)

app.listen(process.env.PORT || 8081, () => {
    console.log(`Server is running on port ${process.env.PORT || 8081} url is http://localhost:${process.env.PORT || 8081}/sayHello`);
    }
);
