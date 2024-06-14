// Sorting an string array
let fruits = ["banana","mango","pomengranate", "apple"]
fruits.sort()   //this sort method can only sort strings
console.log(fruits)
console.log(fruits.reverse())


let scores = [12,003,1100,22,44,33]
scores.sort()
console.log(scores)

let scores1 = [12,003,1100,22,44,33]
let res = scores1.sort((a,b)=> a-b)
console.log(res)

//Reverse sort

let scores2 = [12,003,1100,22,44,33]
let res1 = scores2.sort((a,b)=> b-a)
console.log(res1)
