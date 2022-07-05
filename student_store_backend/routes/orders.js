const express = require('express')
const Order = require ("../models/store")
const router = express.Router()

router.get("/", async (req,res, next)=>{
    try{
        const orders = await Order.listOrdersForUser()
        return res.status(201).json({orders})
    } catch(err){
        next(err)
    }
})

router.post("/",  async (req, res, next) => {
    try {
        
        const ordering = await Order.createOrder({ordering})
        return res.status(201).json({ ordering })
    }
    catch(err) {
        next(err)
    }
})

module.exports = router

