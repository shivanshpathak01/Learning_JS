let marvel_Heroes = ["Ironman","Thor","Spiderman","Strange"];
let dc_Heroes = ["Batman","AquaMan","Superman"];

// let all_Heroes = marvel_Heroes.concat(dc_Heroes);
// console.log(all_Heroes);

// Above mentioned method of concatanation is old 
// Now the following method is mostly used 

let all_Heroes =[...marvel_Heroes,...dc_Heroes];
console.log(all_Heroes);

// If sometimes the situation comes out to be that we have been given array inside array inside array inside array upto n depth then to make them one single array we use flat() method 

let num_Array = [1,2,5,[8,9,4,1,5,[4,5,5,2,6,7,2,[2,52,21,5,0,5,9,9,71,[4,6,5,[41,5,4,7,6]]]]]];
let ans_Array = num_Array.flat(Infinity);    // We gave infinity and rest will be handled by program itself but the good practice is we should give exact amount of depth whatever it is

console.log(ans_Array);

console.log(Array.isArray("Shivansh"));
console.log(Array.from("Shivansh"));
console.log(Array.from({name : "Shivansh"}));   // Can't convert it to Array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));     // will give us an array from given set of values 

