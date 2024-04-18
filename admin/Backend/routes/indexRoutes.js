import exerciseRoutes from './exerciseRoutes.js';
import adminRoutes from './adminRoutes.js';
import userRoutes from './userRoutes.js';

export const routes = (app) => {
    app.use('/admin/exercise', exerciseRoutes);
    app.use('/admin', adminRoutes);
    app.use('/admin/user', userRoutes);
}