const express=require('express');
const app=express();
const path=require('path')
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    console.log("hello")
    res.render('index.ejs')
    
   
})
app.get('/home',(req,res)=>{
    console.log("hello")
    res.render('index.ejs')
    
   
})
app.get('/profile',(req,res)=>{
    console.log("hello")
    res.render('login.ejs')
    
   
})
app.get('/update',(req,res)=>{
    console.log("hello")
    res.render('removeitem.ejs')
    
   
})
app.get('/salesrecord',(req,res)=>{
    console.log("hello")
    res.render('salesrecord.ejs')
    
   
})
app.listen(3000);

