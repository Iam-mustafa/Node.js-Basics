const express = require("express")
const router = express.Router()
const signUpTemplateCopy = require('../models/SignupModel')

router.post('/signup', (request, response)=>{
    const signedUpUser = new signUpTemplateCopy({
    //   fullName:request.body.fullName,
    //   username:request.body.username,
    //   email:request.body.email,
    //   password:request.body.password,
    FirstName: request.body.FirstName,
    LastName: request.body.LastName,
    EmailID: request.body.EmailID,
    Password: request.body.Password,
    })
    console.log(signedUpUser)
    signedUpUser.save()
        .then(data =>{
        response.json(data)
        })
    .catch(error=>{
        response.json(error)
    })
})
// router.post('/login', (req, res) => {
// 	const { EmailID, Password } = req.body
//     const user =  signUpTemplateCopy.findOne({ EmailID, Password},(err,user)=>{

//     })
//     console.log(user,"user")
//     if (!user) {
// 		return res.json({ status: 'error', error: 'Invalid username/password' })
// 	}
//     if (user) {
//         return res.json({ status: 'ok', data: req.body,user:user })
// 	}
   
// })
// const userScheema = new mongoose.Schema( {
//     FirstName: String,
//     LastName: String,
//     LoginID: String,
//     EmailID: String,
//     Password : String
 
//   })



router.post("/login", (req, res) =>{
   const {EmailID, Password} = req.body
   console.log(req.body)

   signUpTemplateCopy.findOne({EmailID:EmailID}, (err, user)=>{
   console.log(user)

      if(user){
         if(Password === user.Password){
            res.send({message:"Login Successful", user: user})
            return res.json({ status: 200, data: req.body,user:user })
         }else{
            // res.send({message:"Password did'nt matched"})
            res.status(404).send({message:"Password did'nt matched",error:"error"})
            // return res.json({ status: 500, error: 'Invalid password' })
         }
      }else{
        // return res.json({ status: 500, error: 'Invalid username/password' })
        res.status(404).send({message:"Invalid username/password",error:"error"})
      }
   })

      
 })

module.exports = router