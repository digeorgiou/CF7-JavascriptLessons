const students = ['Alice', 'Andreas','Bob', 'Costas']

//μεσα την forEach βαζω ενα function που το οριζω εκεινη τη στιγμη
//η function παιρνει 3 ορισματα, (value, index, array)
//με την _ κανει ignore πχ to index
students.forEach(function(val, _, arr) {
  console.log(val, arr)
})

//επιστρεφει νεο πινακα, δεν τροποποιει τον ιδιο
//ελεγχει ενα ενα τα στοιχεια με βαση μια συνθηκη που βαζουμε
//τα τοποθετει σε νεο πινακα
let filtered = students.filter(student => student === 'Andreas')
console.log(filtered)

//αλλαζει την υπαρχουσα τιμη καθε στοιχειου σε κατι αλλο
let mapped = students.map(student => "Student: " + student)
console.log(mapped)

const numbers = [1, 6, 9, 12]
//το callback της reduce παιρνει 4 παραμετρους
//και η reduce παιρνει ακομα εναν αριθμο εκτος απ το callback. εδω το 0
//πριν το value μπαινει ενας accumulator το total. το 0 ειναι η αρχικη τιμη.
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)