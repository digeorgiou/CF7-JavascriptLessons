const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// 1η παραμετρος το startIndex
// 2η παραμετρος το πληθος των στοιχειων που θα κανουμε slice out
// μετα την δευτερη μπαινουν οι τιμες που θα γινουν insert


// Delete
const arr2 = arr.splice(0, 4)
console.log(arr2)
console.log(arr)


// Insert
arr.splice(0, 0, 10)
console.log(arr)


// Update
arr.splice(0, 1, 11)
console.log(arr)

arr.splice(3,0,43)
console.log(arr)