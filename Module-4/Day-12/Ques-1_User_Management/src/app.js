import express from 'express';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

export default app;
