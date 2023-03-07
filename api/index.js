import express from 'express';
import postRoutes from './routes/posts.js'
const app = express();


// middleware for parsing json data
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes)





app.listen(8500, () => {
    console.log('Connected!');
});