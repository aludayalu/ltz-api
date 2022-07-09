const express= require('express');
const app = express();
const price=require('./api/liquidity');
app.use("/api/liquidity",price);
const PORT=process.env.PORT || 5050;
app.listen(PORT,()=>{console.log("Server is running on port "+PORT)});