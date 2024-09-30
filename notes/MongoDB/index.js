const mongoose = require('mongoose');

main().
    then(()=>{
     console.log("Connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User",userSchema);

// User.deleteOne({name:"demo"}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
  
// })

User.findByIdAndDelete(("66fa491b30abf026d5a15c93")).then((res)=>{
  console.log(res);
  
})


// User.findOne({age:{$gt :25}}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
  
// })

// User.updateMany({age:{$gt:30}},{age:99}).then((res)=>{
//   console.log(res);
  
// }).catch((err)=>{
//   console.log(err);
  
// })


// User.insertMany([
//   {name : "demo",gmail:"demo@gmail.com",age:100},
//   {name : "zeta",gmail:"zeta@gmail.com",age:22},
//   {name : "test",gamil:"test@gmail.com",age:26}
// ]).then((res)=>{
//   console.log(res);
  
// })