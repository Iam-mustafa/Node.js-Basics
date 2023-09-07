const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/test-bits-db').then(success=>{
    console.log('DB Server Connected!!!');
});
const exercisesRouter = require('./routes/Excersice');
const usersRouter = require('./routes/Users');




app.use(cors());
app.use(express.json());

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});