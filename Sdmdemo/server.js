var express =require('express');
var app =express();
app.use(express.static('public'))
app.get("/",(req,res)=>{res.send("welcome to online app");});
app.listen(8000);
console.log("app is listening on port 8000");