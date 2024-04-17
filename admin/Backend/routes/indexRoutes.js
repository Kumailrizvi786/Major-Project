import exerciseRoutes from './exerciseRoutes.js';
import adminRoutes from './adminRoutes.js';

export const routes = (app) => {
    app.use('/admin/exercise', exerciseRoutes);
    app.use('/admin', adminRoutes);
}