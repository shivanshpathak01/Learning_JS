// Initializing the Database, so that whenever we get empty database, just initialise using this data 

const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

main().then(()=>{console.log("Connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from:"Demo",
        to:"zeta",
        msg:"Have fun",
        created_at:new Date()
        },
        {
            from:"ravi",
            to:"taiilwinder",
            msg:"IMAGO",
            created_at:new Date()
            },
            {
                from:"rishu",
                to:"hero",
                msg:"I can beat superman",
                created_at:new Date()
                },
                {
                    from:"dictator",
                    to:"nazi",
                    msg:"Jews should die",
                    created_at:new Date()
                    },
]

    Chat.insertMany(allChats);

