const mongoose = require("mongoose");

// Defining the Schema, how it is going to be 

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    created_at:{
        type:Date,
        required:true
    }
})

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;      // exporting so that can be used in index.js or any other files that we want 