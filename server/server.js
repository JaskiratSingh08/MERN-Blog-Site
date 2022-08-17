const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

    const storage = multer.diskStorage({
        destination: (req,file,cb)=> {
            cb(null, "images")
        },
        filename: (req,file,cb)=>{
            cb(null, req.body.name)
        }
    });

    const upload = multer({storage:storage})
    app.post('/upload', upload.single("file"),(req,res)=>{
        res.status(200).json("File has been uploaded")
    });


    app.use("/auth", authRoute);
    app.use("/users", usersRoute);
    app.use("/posts", postsRoute);
    app.use("/categories", categoryRoute);
    
app.listen('4000',()=>{
    console.log("App is lisening at the port")
});