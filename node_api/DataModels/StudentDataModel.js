let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack18")

let studentSchema = new schemaObj({
    name : {type:String, required : true},
    age : {type:Number},
    grade : {type:Number},
    address: {type:String}
},
{
    versionKey: false
})

let StudentModel = mongooseObj.model("student", studentSchema);

module.exports = StudentModel