let express = require("express")
let studentRoute = express.Router({})

studentRoute.get("/",(req, res)=>{
    res.send("Its a student App")
})

studentRoute.get("/getStudentDetails",(req, res)=>{
    let queryString = req.query
    let name = queryString.name
    let age = queryString.age
    let address = queryString.address
    let session = queryString.session
    console.log("Student details Page. Name: ", name, " Age: ", age, "Address: ", address, "Session: ", session)
    saveStudentDetails(queryString)
    res.json(queryString)
})
  
var saveStudentDetails = function(queryString) {
    let name = queryString.name
    let age = queryString.age
    let address = queryString.address
    let session = queryString.session
    console.log("Student details Save Page. Name: ", name, " Age: ", age, "Address: ", address, "Session: ", session)
    let fs = require("fs")
    let studentInfo = JSON.stringify([
        { name : name,
        age : age,
        address : address,
        session : session
    }]);
    
    fs.readFile('studentInfo.txt','utf8',(err, studentInfo)=>{
    console.log("save information" + studentInfo)
    let writerStream = fs.createWriteStream("studentInfo.txt",{flags:'a'}, "utf8");
    
    writerStream.write(JSON.stringify([
        { name : name,
        age : age,
        address : address,
        session : session
    }]));
        writerStream.end();
    })
}

/*studentRoute.get("/saveStudentDetails",(req, res)=>{
    let queryString = req.query
    let name = queryString.name
    let age = queryString.age
    let address = queryString.address
    let session = queryString.session
    console.log("Student details Save Page. Name: ", name, " Age: ", age, "Address: ", address, "Session: ", session)
    let fs = require("fs")
    let studentInfo = JSON.stringify([
        { name : name,
        age : age,
        address : address,
        session : session
    }]);
    
    fs.readFile('studentIfo.txt','utf8',(err, studentInfo)=>{
    console.log("save information" + studentInfo)
    let writerStream = fs.createWriteStream("studentIfo.txt",{flags:'a'}, "utf8");
    
    writerStream.write(JSON.stringify([
        { name : name,
        age : age,
        address : address,
        session : session
    }]));
        writerStream.end();
    })

    res.json(queryString)
})*/
module.exports = studentRoute;