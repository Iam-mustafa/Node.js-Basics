const mongoose= require('mongoose')

const signUpTemplate = new mongoose.Schema({
    // fullName:{
    //     type: String,
    //     required:true
    // },
    // username:{
    //     type: String,
    //     required: true
    // },
    // email:{
    //     type: String,
    //     required: true 
    // },
    // password:{
    //     type: String,
    //     required: true
    // },
    FirstName: String,
    LastName: String,
    EmailID: String,
    Password: String,
    date:{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)