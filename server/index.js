import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
// has to include filetype
import postRoutes from './routes/posts.js';

const app = express();
// every route starts with posts - default route
// localhost:5000/posts

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

// this will be in .env, mongoDB database connection
const CONNECTION_URL = "mongodb+srv://rneyrinck:092295@cluster0.8iq4lh0.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify', false);