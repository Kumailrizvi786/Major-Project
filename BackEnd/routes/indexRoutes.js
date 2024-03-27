import { checkAuth } from '../middlewares/checkAuth.js';
import userRoutes from "../routes/userRoutes.js";
import emailRoutes from "./emailRoutes.js"

export const routes = (app) => {
    
    app.use('/user/', userRoutes);
    app.use('/email/', emailRoutes);
    app.use(checkAuth);
    app.get("/sayHello", (req, res) => {
        res.json({message: "Hello World"});
        }
    );
}