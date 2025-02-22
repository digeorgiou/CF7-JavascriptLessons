const arr = [1, 2, 3]
console.log(arr.join(", "))

console.log(arr.join())

let out = ""
for (const item of arr) {
  out += item + ", "
}
console.log(out)

//concat

const arr1 = [1,2,3]
arr2 = arr1.concat(4,[5,6])

//δεν γινεται modify το arr1. δινει νεο copy

console.log(arr2)