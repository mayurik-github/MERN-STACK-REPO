let express = require("express")
let productRouter = express.Router({})

let ProductDataModel = require("../DataModels/ProductDataModel");
productRouter.post("/api/addProduct", (req, res)=> {
    ProductDataModel.findOne({name:req.body.name}).then((existingProduct)=> {
        if(existingProduct) {
            console.log("Product already exists: " + existingProduct);
            res.send(existingProduct);
        } else {
            let newProduct = new ProductDataModel(req.body)
            newProduct.save().then((newProduct)=> {
            console.log("Adding new product: " + newProduct);
            res.send(newProduct);
            }).catch((err)=> {
                console.log("Error in adding product: " + err);
                res.send("Error in adding product")
            })

        }
    }).catch((err1)=> {
        console.log("Error in finding product: " + err1);
        res.send("Error in finding product: " + err1)
    })
})

productRouter.get("/api/getProducts", (req,res)=> {
    ProductDataModel.find().then((allProducts)=> {
        res.send(allProducts)
    }).catch(()=>{
        res.send("Error while fetching products..")
    })
})

module.exports = productRouter;