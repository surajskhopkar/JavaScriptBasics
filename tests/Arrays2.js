//Reduce filter map
var marks = [20,40,50,60,70,80]
let total = marks.reduce((sum,mark) => sum+mark, 0)
console.log(total)
console.log("**************************************")

//print even numbers from below array
let scores = [12,13,14,16]
var res = []
for(i=0;i<scores.length;i++){
    if (scores[i] % 2 == 0) {
        res.push(scores[i])

    }
}

console.log(res)
console.log("**************************************")

//Reduce filter map

let resScore = scores.filter(score => score%2 == 0)
console.log(resScore)