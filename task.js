const express=require("express");
const bodyparser=require("body-parser");
const PORT = process.env.PORT || 3000;


const app=express();
var items=["EAT","SLEEP","REPEAT"] ;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",function(req,res)
{
var today=new Date();


var options={
  weekday:"long",
    Day:"numeric" ,
month :"long"
};
var day=today.toLocaleDateString("en-US",options);
res.render(
  "list",{
  KINDOFDAY:day , newlistItems:items
});

});

app.post("/" ,function(req,res)
{
 var item= req.body.newWORK;
 items.push(item);
res.redirect("/") ;
});

app.listen(PORT,function()
{
  console.log("servrr at port 3000");
});
