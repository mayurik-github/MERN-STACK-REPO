let mongooseDataObj = require("mongoose")
schemaObj = mongooseDataObj.Schema;

mongooseDataObj.connect("mongodb://127.0.0.1/mernstack18")

let productSchema = new schemaObj({
    name: {type:String, required : true},
    price: {type:Number, required : true},
    description: {type:String},
    rating: {type:String},
    quantity: {type:Number, default:1}
},
{
    versionKey: false
})

let ProductModel = mongooseDataObj.model("product", productSchema);

module.exports = ProductModel