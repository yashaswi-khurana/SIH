const express=require('express');
const Database=require('./database/database.js')
const config = require('./database/config.js')

const path=require('path')


const database = new Database(config);

database
    .executeQuery(
      `CREATE TABLE Vendors (Vendor_ID int NOT NULL PRIMARY KEY, Vendor_Name varchar(30));`
      //Example query
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
   req.send
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

app.listen(3000);


const loginRoute = require('./database/routes/login.js')