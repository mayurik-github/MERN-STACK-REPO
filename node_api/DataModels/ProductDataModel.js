let mongooseDataObj = require("mongoose")
schemaObj = mongooseDataObj.Schema;

mongooseDataObj.connect("mongodb://127.0.0.1/mernstack18")

let productSchema = new schemaObj({
    name: {type:String, required : true},
    price: {type:Number, required : true},
    desc: {type:String},
    rating: {type:String}
},
{
    versionKey: false
})

let ProductModel = mongooseDataObj.model("product", productSchema);

module.exports = ProductModel