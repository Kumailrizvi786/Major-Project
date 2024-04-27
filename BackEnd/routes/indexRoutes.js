import { checkAuth } from '../middlewares/checkAuth.js';
import userRoutes from "../routes/userRoutes.js";
import emailRoutes from "./emailRoutes.js";
import exerciseRoutes from './exerciseRoutes.js';
import resultRoutes from "./resultRoutes.js";

export const routes = (app) => {
    // app.use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend origin
    //     res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies
    //     next();
    //   });      
    app.use('/user/', userRoutes);
    // app.use(checkAuth); //for time being commenting this.
    app.use('/email/', emailRoutes);
    app.use('/exercise', exerciseRoutes);
    app.use('/user/result', resultRoutes);
    app.get("/sayHello", (req, res) => {
        res.json({message: "Hello World"});
        }
    );
}