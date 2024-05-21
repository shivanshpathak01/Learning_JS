const regularUser = {
    email:"hey@gmail.com",
    Hisname:{
        fullname:{
            firstName: "Shivansh",
            lastname: "Pathak"
        }
    },
    contactNum:445154651    
}

// console.log(regularUser.Hisname.fullname.firstName);
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
