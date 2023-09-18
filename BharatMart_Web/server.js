const express=require('express');
const app=express();
const path=require('path')
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    console.log("hello")
    res.render('login.ejs')
    
   
})
app.listen(3000);

