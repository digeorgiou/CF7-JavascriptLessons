do {
    console.log("One iteration")
} while (0)

for (let i = 1 ; 1 ; i++){
    console.log("in for")
    break
}    

let num = 10
while(num) {
    console.log(num)
    num--
}

//&& || !

console.log("Coding" && 7) //truthy && truthy -> returns last truthy value

//truthy && falsy -> returns first falsy value

console.log(false || "Default") // returns first truthy value

//if all are false -> returns last falsy value