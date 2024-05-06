let express = require("express")
let studentRoute = express.Router({})

studentRoute.get("/",(req, res)=>{
    res.send("Its a student App.")
})

studentRoute.get("/getStudentDetails",(req, res)=>{
    let queryString = req.query
    res.json(queryString)
    let fs = require("fs")
    try {
        fs.appendFile("studentInfo.txt", JSON.stringify(queryString), err => {
            if(err) {
                console.log("Error while writig to file: ", err)
            }
        });
    } catch(err) {
        console.log("Error in try catch...", err)
    }
});
module.exports = studentRoute;