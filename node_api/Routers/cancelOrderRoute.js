let express = require("express")
let cancelOrderRouter = express.Router({})

let CancelOrderDataModel = require("../DataModels/CancelOrderDataModel");
cancelOrderRouter.post("/api/saveCancelledOrder", (req, res)=> {
    CancelOrderDataModel.findOne({userId:req.body.order.userId}).then((cancelledOrder)=> {
        let newCancelOrder = new CancelOrderDataModel(req.body.order)
        newCancelOrder.save().then((item)=> {
        console.log("Adding new cancel order: " + item);
        res.send(item);
        }).catch((err)=> {
            console.log("Error in adding cancel order to db: " + err);
            res.send("Error in adding cancel order.")
        })
    }).catch((err1)=> {
        console.log("Error in finding cancelled order: " + err1);
        res.send("Error in cancelled order: " + err1)
    })
})

cancelOrderRouter.delete("/api/deleteOrder", (req,res)=>{
    console.log("Deleting cancelled order: " + req.body.id)
    CancelOrderDataModel.deleteOne({_id:req.body.id}).then((response)=>{
        console.log("Cancelled item deleted: " + response )
        res.send(response)
    })
    .catch((err)=>{
        console.log("Error while delting cancelled item:  " + err)
    })
})

cancelOrderRouter.post("/api/getCancelledOrders", (req,res)=> {
    console.log("user Id: "+req.body.userId)
    let userId = req.body.userId
    CancelOrderDataModel.find().then((allCancelledOrders)=> {
        console.log("allCancelledOrders " + allCancelledOrders)
        let filteredByUserId = allCancelledOrders.filter((order)=>{return order.userId === userId})
        console.log("filtered cancelled orders by user id " + filteredByUserId)
        res.send(filteredByUserId)
    }).catch(()=>{
        res.send("Error while fetching cancelled orders..")
    })
})

module.exports = cancelOrderRouter;