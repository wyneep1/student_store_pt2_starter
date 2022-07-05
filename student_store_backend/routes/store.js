//import Store model
const Store = require ("../models/store")
const express = require('express')
//create new router and export it
const router = express.Router()

//add a get request at / endpoint calling listProducts method of the Store model
router.get("/", async (req,res,next)=>{
    try{
        const products = await Store.listProducts()
        return res.status(201).json({products})
    }
    catch(err){
        next(err)
    }
})
//returns results as the products key of an object

module.exports = router