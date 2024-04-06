let num = "abc";     // Gives the Numerical value of null as 0

let ans = Number(num); // Converts every thing to A Number 
// console.log(ans);

// "33"=>33 
// "33abc"=>NaN 
// true=>1; false=>0 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// console.log(Boolean(0));

console.log(1 + 2 + "2");    // If last digit is String then firstly operation will be performed then concatenation will be performed 


console.log("1" + 2 + 2);   // If first digit is string then every other is treated as String also 



//******************** Comparison**********************

console.log(null>0);
console.log(null==0);
console.log(null>=0);    // For this check null is converted to 0;

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<=0);