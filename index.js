const express = require('express');
const app = express();
const port = 3000

app.route('/',(req,resp)=>{
    resp.json({message:"Hello from index"})
})
app.listen(3000,()=>{
    console.log(`Listening to 3000 port`)
})