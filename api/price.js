const express= require('express');
const router=express.Router();
router.get("/",async (req,res)=>{
    res.json({"hie":"UWU"})
})
module.exports=router;