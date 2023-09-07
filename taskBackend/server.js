const express = require("express");
const app = express()
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')
const cors =require('cors')
// const dotenv = require('dotenv')

// dotenv.config()

mongoose.connect('mongodb://localhost/signupTask').then(success=>{
    console.log('DB Server Connected!!!');
});

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(4000, () => console.log("server is up and running"))