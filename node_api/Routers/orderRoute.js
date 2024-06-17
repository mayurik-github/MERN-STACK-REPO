let express = require("express")
let orderRouter = express.Router({})

let OrderDataModel = require("../DataModels/OrderDataModel");
orderRouter.post("/api/saveOrder", (req, res)=> {
    OrderDataModel.findOne({userId:req.body.userId}).then((existingOrder)=> {
        if(existingOrder) {
            console.log("Order already exists: " + existingOrder);
            res.send(existingOrder);
        } else {
            let newOrder = new OrderDataModel(req.body)
            newOrder.save().then((item)=> {
            console.log("Adding new order: " + item);
            res.send(item);
            }).catch((err)=> {
                console.log("Error in adding order: " + err);
                res.send("Error in adding order")
            })

        }
    }).catch((err1)=> {
        console.log("Error in finding order: " + err1);
        res.send("Error in finding order: " + err1)
    })
})

orderRouter.post("/api/getOrders", (req,res)=> {
    console.log("user Id: "+req.body.userId)
    let userId = req.body.userId
    OrderDataModel.find().then((allOrders)=> {
        console.log("allOrders "+allOrders)
        let filteredByUserId = allOrders.filter((order)=>{return order.userId === userId})
        console.log("filtered by user id "+filteredByUserId)
        res.send(filteredByUserId)
    }).catch(()=>{
        res.send("Error while fetching orders..")
    })
})

orderRouter.delete("/api/deleteOrder", (req,res)=>{
    console.log("Deleting recent order Id: " + req.body.orderId)

    let orderId = req.body.orderId

    OrderDataModel.deleteOne({_id:orderId}).then((order)=>{
        console.log("Recent order deleted successfully:  " + order )
        res.send(order)
    }).catch((err)=>{
        console.log("Error while deleting recenty order: " + err)
    })
})

module.exports = orderRouter;