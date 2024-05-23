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