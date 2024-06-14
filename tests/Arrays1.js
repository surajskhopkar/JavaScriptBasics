var marks = Array(6)
var marks = new Array(20,40,50,60,70,80)
var marks = [20,40,50,60,70,80]

console.log(marks[0])
marks[3] = 22
console.log(marks)
console.log(marks.length)
console.log("**************************************")

//add element at the end
marks.push(100)
console.log(marks)
console.log(marks.length)
console.log("**************************************")

//delete one element at the end
marks.pop()
console.log(marks)
console.log(marks.length)
console.log("**************************************")

//add new element at the start of the array
marks.unshift(99)
console.log(marks)
console.log(marks.length)
console.log("**************************************") 


console.log(marks.indexOf(100))
console.log(marks.indexOf(20))
console.log(marks.indexOf(50))
console.log(marks.indexOf(22))

console.log("**************************************")
//search for element in the array
console.log(marks.includes(120)) //returns false
console.log(marks.includes(22))  //returns true

console.log("**************************************")
console.log(marks.slice(2,5))

console.log("**************************************")
//Sum of elements of array
var sum = 0
for(let i=0; i<marks.length; i++){
    sum = sum + marks[i]
    console.log(marks[i])
}

console.log("Sum of the array: "+sum)



