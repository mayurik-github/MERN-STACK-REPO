let mongooseDataObj = require("mongoose")
schemaObj = mongooseDataObj.Schema;

mongooseDataObj.connect("mongodb://127.0.0.1/mernstack18")

let cancelOrderSchema = new schemaObj({
    userId : {type:String, required : true},
    userName: {type:String, required: true},
    order: {type:Object},
    orderDtTime: {type:Date}
},
{
    versionKey: false
})

let CancelledOrderModel = mongooseDataObj.model("CancelledOrder", cancelOrderSchema);

module.exports = CancelledOrderModel