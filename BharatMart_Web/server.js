const express=require('express');
const app=express();
const path=require('path')
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    console.log("hello")
<<<<<<< HEAD
    res.render('profile.ejs')
=======
    res.render('index.ejs')
    
   
})
app.get('/home',(req,res)=>{
    console.log("hello")
    res.render('index.ejs')
    
   
})
app.get('/profile',(req,res)=>{
    console.log("hello")
    res.render('login.ejs')
>>>>>>> 147b58079737eda77ceed3b4d4850b5ec3dff4be
    
   
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

