// From 1 to 10 give me common multiple values of 2 and 5

let n = 0
for(let k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0 ){
        n++
        console.log(k)
        if(n == 3){
            break
        }
    }

}

// From 1 to 10 give me common multiple values of 2 or 5

let z = 0
for(let k=1; k<=100; k++){
    if(k%2 == 0 || k%5 == 0 ){
        z++
        console.log(k)
        if(z ==3){
            break
        }
    }

}



