import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';

import resourceRoute from './route/resource.route.js';
import userRoute from './route/user.route.js'
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

//db connection
try {
    mongoose.connect(URI);
    console.log("Connected to DB")
} catch (error) {
    console.log("Error: ", error)
}

app.use('/resource', resourceRoute)
app.use('/user', userRoute)

//deployment code

if(process.env.NODE_ENV === "production") {
    const dirPath = path.resolve();
    app.use(express.static("./Frontend/dist"));
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"));
    })
}

app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`)
})