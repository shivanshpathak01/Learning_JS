const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));     // To join the css and all other static files like that 
app.use(express.urlencoded({extended: true}));     // So that we can Parse our data that we are going to fetch from body

main().then(()=>{console.log("Connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
} 


// Index Route 
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

// New Route 
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})

// Create Route
app.post("/chats/new", (req, res) => {          // Getting the value and posting it then
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    newChat.save().then(res =>{console.log("Chat was saved")}).catch(err=>{console.log(err);
    })       // Saving the chat in the DB
    res.redirect("/chats");
  });
  
// All the processes above are asynchronous, Do we need to write async await, No bcz we have already written then, So anywhere if we have used then then we will not used async await

app.get("/",(req,res)=>{
    res.send("root is working");
    
})

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
    
})