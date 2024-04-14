import excerciseRoutes from './exerciseRoutes.js';
import adminRoutes from './adminRoutes.js';

export const routes = (app) => {
    app.use('/admin/excercise', excerciseRoutes);
    app.use('/admin', adminRoutes);
}