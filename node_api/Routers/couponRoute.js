let express = require("express")
let couponRouter = express.Router({})

let CouponDataModel = require("../DataModels/CouponDataModel");
couponRouter.post("/api/saveCoupon", (req,res)=> {
    let couponBody = req.body
    CouponDataModel.findOne(
        {userName: couponBody.userName, couponId: couponBody.couponData.couponId}).
                        then((existingCoupon)=>{
                            if(existingCoupon) {
                                existingCoupon.couponValue = couponBody.couponData.couponValue
                                existingCoupon.save().then((item)=>{
                                res.send(item);
                            })
                            .catch((err)=>{
                                res.send("Error while updating existing coupon: " +err)
                            })
                            } else {
                                let newCoupon = new CouponDataModel(req.body)
                                newCoupon.save().then((item)=> {
                                    res.send(item);
                                }).catch((err)=> {
                                    console.log("Error in adding newCoupon item: " + err);
                                    res.send("Error in adding newCoupon " +err)
                                })
                    
                            }
                        }).catch((err1)=> {
                            console.log("Error in finding coupon: " + err1);
                            res.send("Error in finding coupon: " + err1)
                        })
})

module.exports = couponRouter;