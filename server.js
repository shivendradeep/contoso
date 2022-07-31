const { request, response } = require("express");
var express =require("express");
var app=express()
app.get("/",(request,response)=>{
    response.send(
    "<h1>contosso</h1>"+"<hr/>"
    +"<h3>Smart devices for sales</h3>"
    +"<br/>"
    +"<ol>"
    +"<li>laptops</li>"
    +"<li>mobile</li>"
    +"<li>hollow lens</li>"
    +"<li>smart watches</li>"
    +"<li>gaming consoles</li>"

);

});
app.post("/",(request,response)=>{
   response.send(
    "<h1>showing company's information</h1>"
    +"<h3>company's name:tranflower pvt limited</h3>"
    +"<h3>pushparaj yavatte</h3>"
    +"<h3>a multinational company</h3>"
    )
})


var server=app.listen(9000);
console.log("contoso running on port 9000")