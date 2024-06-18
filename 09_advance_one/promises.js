const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed!');
        resolve();    // Connection of resolve function with .then 
    },1000)
});

promiseOne.then(function(){
    console.log("Promise is consumed");
})
