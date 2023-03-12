import express from 'express';
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/users.js'
import cookieParser from 'cookie-parser';
import multer from 'multer';



const app = express();


// middleware for parsing json data
app.use(express.json());
app.use(cookieParser());


const upload = multer({ dets: 'uploads/' });

app.post('/upload', upload.single('file'), function (req, res) {
    res.status(200).json('Image has been uploaded!');

})

// Routes
app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)







app.listen(8500, () => {
    console.log('Connected!');
});