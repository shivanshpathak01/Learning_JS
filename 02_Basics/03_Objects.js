const mySymbol = Symbol("Hey");

let user = {
    "name" : "Shivansh",  // Generally keys are considered as a String in objects
    [mySymbol]:"Hey",    //Very imp for interviews Now will be considered as Symbol not as Strings 
    email: "shivansh@google.com",
    isWorkingonJS : true
}
user.email = "Shivansh@microsoft.com";
// console.log(user.email);
// Object.freeze(user);      // Now Email can't be changed  
// user.email = "Shivansh@apple.com";
// console.log(user.email);
// console.log(user["name"]);   // more convenient way
console.log(typeof [mySymbol]);

// Object.freeze(user)       Used so that value will never change;