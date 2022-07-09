const express= require('express');
const app = express();
const price=require('./api/price');
app.use("/api/price",price);
const PORT=process.env.PORT || 5050;
app.listen(PORT,()=>{console.log("Server is running on port "+PORT)});