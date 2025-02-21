const user = {
    firstname: "Alice",
    age: 25,
    isStudent: false
}

console.log(user.firstname)
console.log(user.age)
console.log(user.isStudent)

//μπορουμε να αναφερθουμε στα πεδια ενος Object και ετσι.
console.log(user["firstname"])
console.log(user["age"])
console.log(user['isStudent'])

//ο δευτερος τροπος ειναι πιο ευελικτος, γιατι μπορει να παρει και μεταβλητη, 
// ενω μετα την τελεια πρεπει να μπει ακριβως το property
const ageVar = "age"
console.log(user[ageVar]) //δουλευει
// console.log(user.ageVar) δεν δουλευει