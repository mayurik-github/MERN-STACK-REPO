let mongooseDataObj = require("mongoose")
schemaObj = mongooseDataObj.Schema;

mongooseDataObj.connect("mongodb://127.0.0.1/mernstack18")

let couponSchema = new schemaObj({
    couponData: {type:Object},
    userName: {type:String}
},
{
    versionKey: false
})

let CouponModel = mongooseDataObj.model("coupon", couponSchema);

module.exports = CouponModel