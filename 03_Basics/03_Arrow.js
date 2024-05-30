const user = {
    username : "Shivansh",
    price : 100,
    
    welcomeMessage : function (){
        console.log(`${this.username}, Welcome on-Board`);
    }
}

user.welcomeMessage();
user.username = "Ariana";
user.welcomeMessage();        // Here the name got changed bcz we used this keyword


    // Arrow Function 

    let addTwo = (num1,num2) =>{
        return num1 + num2;
    }
    console.log(addTwo(5,8));

    let add2 = (num1,num2) => num1+num2;    // Second method to write Arrow function-> Implicit method 
    console.log(add2(10,10));
    