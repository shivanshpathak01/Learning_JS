let myArr = [1,2,3];

let total = myArr.reduce(function(acc,currentValue){
    return acc + currentValue
},0);
console.log(total);