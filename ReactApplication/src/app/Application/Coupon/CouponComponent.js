import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveCouponToDb } from "../../../state/Coupon/couponAction";
import { useEffect } from "react";
const Coupon = () => {
    let dispatchToDB = useDispatch()
    let user = useSelector((state)=>state.userReducer.User)
    let coupons = useSelector((state)=>state.couponReducer)
    
    let generateCoupon = (event) => {
        console.log("List of coupons from store: " + coupons)
        let getRandom6digitNumber = () => {
            return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        }
    
        let couponId = getRandom6digitNumber()
        let couponValue = Math.floor(Math.random() *10)
        
        console.log("Coupon Id: " + couponId)
        console.log("Coupon value: " + couponValue)
        const couponData = {
            couponId,
            couponValue
        }
        dispatchToDB(saveCouponToDb(user.userName, couponData))
        event.preventDefault()
    }

    return(
        <>
   
            <button onClick={generateCoupon}>GenerateCoupon</button>
           
        </>
    )


}

export default Coupon