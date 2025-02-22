const arr = [1, 2, 3, 4]
delete arr[0]
//δεν μειωνει το length με την delete, μενει αδεια η θεση 0

console.log(arr)

arr.push(5)         // ο ίδιος array παραμένει
arr.push(6, 7)
console.log(arr)