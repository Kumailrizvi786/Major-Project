import excerciseRoutes from './excerciseRoutes.js';
import adminRoutes from './adminRoutes.js';

export const routes = (app) => {
    app.use('/admin/excercise', excerciseRoutes);
    app.use('/admin', adminRoutes);
}