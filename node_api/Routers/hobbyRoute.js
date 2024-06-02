let express = require("express")
let hobbyRouter = express.Router({}) 

let HobbyDataModel = require("../DataModels/HobbyDataModel");

hobbyRouter.post("/api/addHobby", (req, res)=> {
    console.log("Body" +req.body.hobbyName)
    HobbyDataModel.findOne({hobbyName:req.body.hobbyName}).then((existingHobby)=> {
        console.log("BOdy" ,existingHobby)
        if(existingHobby) {
            console.log("Hobby exists: " + existingHobby);
            res.send(existingHobby);
        } else {
            
            let newHobby = new HobbyDataModel(req.body)
            
            newHobby.save().then((newHobby)=> {
                console.log("Adding new hobby: " + newHobby);
                res.send(newHobby);
            }).catch((err)=> {
                console.log("Error in adding hobby: " + err);
                res.send("Error in adding hobby")
            })

        }
    }).catch((err1)=> {
        console.log("Error in finding hobby: " + err1);
        res.send("Error in finding hobby: " + err1)
    })
})

hobbyRouter.get("/api/getHobbies", (req,res)=> {
    HobbyDataModel.find().then((allHobbies)=> {
        res.send(allHobbies)
    }).catch(()=>{
        res.send("Error while fetching hobbies..")
    })
})

module.exports = hobbyRouter;