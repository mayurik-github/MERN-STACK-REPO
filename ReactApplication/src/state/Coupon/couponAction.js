import * as actionType from "../actionTypes"
import axios from "axios"

export const sendCouponToStore = (coupon) => ({
    type: actionType.AddCouponToStore,
    payload: coupon
})

export const saveCouponToDb = (userName,couponData) => {
    return(dispatch)=> {
        axios.post("http://localhost:9000/coupon/api/saveCoupon", {userName, couponData})
                .then(collection=>collection.data)
                .then((collection) => {
                    console.log("Coupon added: " + collection)
                    dispatch(sendCouponToStore(collection))
                })
               .catch((err)=> {
                    console.log("Error while adding coupon  ", err)
                });
    }

}