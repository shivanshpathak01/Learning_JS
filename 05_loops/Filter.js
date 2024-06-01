const myNums = [1,2,3,4,5,6,7,8,9,10];

const  newNums = myNums.filter((num)=>num>5);  // We give a parameter and a condition too 
    // console.log(newNums);

    // Same thing in forEach 
const newNums2 = [];

myNums.forEach((val)=>{
    if(val>4) {
        newNums2.push(val);
    }
})
// console.log(newNums2);

let myNums2 = [1,2,3,4,5];
// let newNums = myNums.map((val)=> val + 10);
// console.log(newNums);

let newNums3 = myNums.map((val2)=>val2+10).map((val2)=>val2*2);
console.log(newNums3);