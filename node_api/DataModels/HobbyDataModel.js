let mongooseDataObj = require("mongoose")
schemaObj = mongooseDataObj.Schema;

mongooseDataObj.connect("mongodb://127.0.0.1/mernstack18")

let hobbySchema = new schemaObj({
    hobbyName: {type:String, required : true}
},
{
    versionKey: false
})

let HobbyModel = mongooseDataObj.model("hobby", hobbySchema);

module.exports = HobbyModel