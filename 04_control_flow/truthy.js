const userEmail = "shivansh@google.com";

// without using any condition we are only placing the values and the code is running fine this is due to a cobncept called truthy and falsy values

if (userEmail) {
    console.log("Delievered");
}
else{
    console.log("Not yet");
}
  // All the falsy values  : false, 0, -0, null, BigInt 0n, undefined, NaN,""
  // All the surprising truthy values : "0", 'false', " ", [],{},function(){} 