import express from 'express';
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/users.js'
const app = express();


// middleware for parsing json data
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)





app.listen(8500, () => {
    console.log('Connected!');
});