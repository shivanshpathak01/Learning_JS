let arr = [5,8,9,7,6,2,10];

// For normal functions 

arr.forEach(function (val) {
    // console.log(val);
})

// For arrow Function

arr.forEach((hi)=>{
    // console.log(hi);
})

// For already given function 

function hi(item){
    console.log(item);
}

arr.forEach(hi);

