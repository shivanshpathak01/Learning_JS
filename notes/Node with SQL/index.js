const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_DB',
    password : 'Shivansh@0001'
  });

  let getRandomUser = () => {
    return [
      faker.string.uuid(),
       faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(), 
    ];
  }

// Home Page
app.get("/",(req,res)=>{
  let q = `select count(*) from user`;
  try{
    connection.query( q, (err,result)=>{
      if(err) throw err; 
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count}); 
    }); 
  } catch(err){
      console.log(err);
      res.send("Some error occurred"); 
  } 
});
// Show Route 
app.get("/user",(req,res)=>{
  let q = `select * from user`;
  try{
    connection.query( q, (err,users)=>{
      if(err) throw err; 
      res.render("showusers.ejs",{users});
      // res.send(result);
      
    }); 
  } catch(err){
      console.log(err);
      res.send("Some error occurred 2 "); 
  } 
});

//Edit route 
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `select * from user where id = '${id}'`;
  res.render("edit.ejs");
  try{
    connection.query( q, (err,result)=>{
      if(err) throw err; 
      console.log(result);
      res.render("edit.ejs");
      // res.send(result);
      
    }); 
  } catch(err){
      console.log(err);
      res.send("Some error occurred 2 "); 
  } 
});

app.listen("8080",()=>{
  console.log("App is listening to port");  
})

// connection.end();
