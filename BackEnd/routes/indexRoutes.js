import loginRouter from './loginRoutes.js';
import registerRoute from './registerRoutes.js';
import logoutRouter from './logoutRoutes.js';
import { checkAuth } from '../middlewares/checkAuth.js';

export const routes = (app) => {
    
    app.use('/register', registerRoute);
    app.use('/login', loginRouter);
    app.use(checkAuth);
    app.use('/logout', logoutRouter);

    app.get("/sayHello", (req, res) => {
        res.json({message: "Hello World"});
        }
    );
}