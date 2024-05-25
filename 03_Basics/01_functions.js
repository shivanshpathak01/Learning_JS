function sayMyName(){
    console.log("Shivansh");
    console.log("Pathak");
}

sayMyName();

function addTwoNums(num1,num2){
    console.log( num1 + num2 );
}

addTwoNums(5,4);

function loginUser(user = "shivansh"){     // This is the default value, whenever we will does not provide the argument, default value will be printed and if we provide any value it will get overridden.
    
        if(user===undefined){
            console.log("Please enter the username!");
            return;
        }
        return `${user} just logged into the system`;
}

console.log(loginUser());

const user = {
    username :"S",
    price :545
}
function handleObject(anyuser){
    console.log(`Username is ${anyuser.username} and the price is ${anyuser.price}`);
}
handleObject(user);  // Object passing 
handleObject({
    username : "hei",
    price : 2152               //Object passing by second method
})
let myArray = [200,400,4501,522];
function returnMyDesiredValue(myIndex){
    return myIndex[2];
}

console.log(returnMyDesiredValue(myArray));