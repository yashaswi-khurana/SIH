const express=require('express');
const Database=require('./database/database.js')
const config = require('./database/config.js')
const path=require('path')

const database = new Database(config);

database
    .executeQuery(
      `CREATE TABLE Login (id int NOT NULL IDENTITY, passwd varchar(30));`
    )
    .then(() => {
      console.log('Table created');
    })
    .catch((err) => {
    // Table may already exist
        console.error(`Error creating table: ${err}`);
    });

const app=express();
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
app.get('/update',(req,res)=>{
    
    res.render('removeitem.ejs')
    
   
})
app.get('/salesrecord',(req,res)=>{
    
    res.render('salesrecord.ejs')
    
   
})
app.get('/login',(req,res)=>{
    
    res.render('login.ejs')
    
   
})
app.get('/signup',(reqp,res)=>{
    
    res.render('signup.ejs')
    
   
})
app.listen(3000);

