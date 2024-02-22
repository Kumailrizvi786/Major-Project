import loginRouter from './loginRoutes.js';
import registerRoute from './registerRoutes.js';

export const routes = (app) => {
    
    app.use('/login', loginRouter);
    app.use('/register', registerRoute);
}