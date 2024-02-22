import dotenv from 'dotenv'
import connectDB from "./db/dbConnect.js"
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import {routes} from './routes/indexRoutes.js'

dotenv.config({
    path: './env'
})
connectDB(); //connecting to DataBase

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
routes(app)

app.get("/sayHello", (req, res) => {
    res.send("Hello World");
    }
);

app.listen(process.env.PORT || 8081, () => {
    console.log(`Server is running on port ${process.env.PORT || 8081} url is http://localhost:${process.env.PORT || 8081}/sayHello`);
    }
);
