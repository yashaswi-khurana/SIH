const express=require('express');
const app=express();
const path=require('path')
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
   
    res.render('index.ejs')
    
   
})
app.get('/home',(req,res)=>{
    
    res.render('index.ejs')
    
   
})
app.get('/profile',(req,res)=>{ 
    
    res.render('profile.ejs')
    
   
})
app.get('/createnewitem',(req,res)=>{
    
    res.render('createnewitem.ejs')
    
   
})
app.get('/salesrecord',(req,res)=>{
    
    res.render('salesrecord.ejs')
    
   
})
app.get('/login',(req,res)=>{
    
    res.render('login.ejs')
    
   
})
app.get('/signup',(req,res)=>{
    
    res.render('signup.ejs')
    
   
})
app.get('/removeitem',(req,res)=>{
res.render('removeitem.ejs')
})
app.listen(3000);

