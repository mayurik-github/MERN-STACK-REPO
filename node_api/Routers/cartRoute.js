let express = require("express")
let cartRouter = express.Router({})

let CartDataModel = require("../DataModels/CartDataModel");
    cartRouter.post("/api/addCartItems", (req, res)=> {
        CartDataModel.findOne({userId:req.body.userId}).then((existingCart)=> {
        if(existingCart) {
            existingCart.cart = req.body.cart
            existingCart.save().then((items)=>{
                res.send(items);
            })
            .catch((err)=>{
                res.send("Error while updating existing cart item: " +err)
            })
        } else {
            let newCart = new CartDataModel(req.body)
            newCart.save().then((item)=> {
                res.send(item);
            }).catch((err)=> {
                console.log("Error in adding cart item: " + err);
                res.send("Error in adding cart " +err)
            })

        }
    }).catch((err1)=> {
        console.log("Error in finding cart: " + err1);
        res.send("Error in finding cart: " + err1)
    })
})

cartRouter.post("/api/getUserCart",(req, res)=>{
    CartDataModel.findOne({userId: req.body.userid})
        .then((cart) => { res.json(cart) })
        .catch((err)=>{res.send("Error Occurred: "+ err);})
});

module.exports = cartRouter;