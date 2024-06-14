// map - modify each element of the array to new value

let values = [12,14,16]

let mappedArray = values.map(score=>score*3)

console.log(mappedArray)

let summedArray = mappedArray.reduce((sum,val) => sum+val, 0)

console.log(summedArray)

let values1 = [12,14,16]

let res = values1.map(score=>score*3).reduce((sum,val) => sum+val, 0)

console.log(res)