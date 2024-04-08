const mySymbol = Symbol("Hey");


let user = {
    "name" : "Shivansh",
    [mySymbol]:"Hey",    // Now will be considered as Symbol not as Strings
    email: "shivansh@google.com",
    isWorkingonJS : true
}


console.log(user.name);
console.log(user["name"]);   // more convenient way
console.log([mySymbol]);

// Object.freeze       Used so that value will never change;
