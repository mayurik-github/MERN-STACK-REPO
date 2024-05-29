let express = require("express")
let studentRouter = express.Router({})

let StudentDataModel = require("../DataModels/StudentDataModel");

studentRouter.post("/api/addStudent", (req, res)=> {
    StudentDataModel.findOne({name:req.body.name}).then((existingStudent)=> {
        if(existingStudent) {
            console.log("Student exists: " + existingStudent);
            res.send(existingStudent);
        } else {
            let newStudent = new StudentDataModel(req.body)
            newStudent.save().then((newStudent)=> {
                console.log("Adding new student: " + newStudent);
                res.send(newStudent);
            }).catch((err)=> {
                console.log("Error in adding student: " + err);
                res.send("Error in adding student")
            })

        }
    }).catch((err1)=> {
        console.log("Error in finding student: " + err1);
        res.send("Error in finding student: " + err1)
    })
})

studentRouter.get("/api/getStudents", (req,res)=> {
    StudentDataModel.find().then((allStudents)=> {
        res.send(allStudents)
    }).catch(()=>{
        res.send("Error while fetching students..")
    })
})

module.exports = studentRouter;