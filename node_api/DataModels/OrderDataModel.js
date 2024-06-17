let mongooseDataObj = require("mongoose")
schemaObj = mongooseDataObj.Schema;

mongooseDataObj.connect("mongodb://127.0.0.1/mernstack18")

let orderSchema = new schemaObj({
    userId : {type:String, required : true},
    userName: {type:String, required: true},
    order: {type:Object},
    status: {type:String},
    orderDtTime: {type:Date}
},
{
    versionKey: false
})

let OrderModel = mongooseDataObj.model("RecentOrder", orderSchema);

module.exports = OrderModel