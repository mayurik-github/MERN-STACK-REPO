let mongooseDataObj = require("mongoose")
schemaObj = mongooseDataObj.Schema;

mongooseDataObj.connect("mongodb://127.0.0.1/mernstack18")

let cartSchema = new schemaObj({
    cart : {type:Object},
    userName: {type:String}
},
{
    versionKey: false
})

let CartModel = mongooseDataObj.model("cart", cartSchema);

module.exports = CartModel