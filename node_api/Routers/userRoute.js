let express = require("express")
let userRouter = express.Router({}) 

let UserDataModel = require("../DataModels/UserDataModel"); 

userRouter.post("/api/signinup",(req, res)=>{ 
    console.log(req.body) 

    UserDataModel.findOne({userName:req.body.userName}).then((existingUser)=>{
        if(existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser)
        }
        else {

            let newUser = new UserDataModel(req.body)

            newUser.save().then((newUser)=>{
                console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err sign in", err);
        res.send("error while searching user sign in")
    })
})

userRouter.get("/api/users",(req, res)=>{
    UserDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})
  

  module.exports = userRouter;