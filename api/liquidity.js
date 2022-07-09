const express= require('express');
const router=express.Router();
router.get("/",async (req,res)=>{
    res.json({"coins":10000,"funds":"1790"})
})
module.exports=router;