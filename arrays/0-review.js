const cities = ["Athens", "Paris", "Toronto"]

// Add - Modifies the array
cities.push("London")

//access στοιχειο στην θεση 0
let city = cities[0]
console.log(city)

//τροποποιηση στοιχειου στην  θεση 1
cities[1] = "London"

//επισκεπτομαστε 1-1 τα στοιχεια του πινακα και εκτελειται το callback function
//c ειναι το value καθε στοιχειου (μπορω να ονομασω κι αλλιως)
cities.forEach(c => console.log(c))

//αν δεν κανω κατι αλλο, η ταξινομηση γινεται λεξικογραφικα (ASCI)
cities.sort()

//ετσι οριζουμε πως θελουμε να γινει η ταξινομηση
//ετσι η ταξινομηση ειναι αυξουσα 
// (αν γραφαμε b.localeCompare(a, "en") θα ηταν φθινουσα)
cities.sort((a, b) => a.localeCompare(b, "en"))
//αν δεν ορισουμε το locale παιρνει αυτοματα του υπολογιστη. 
// (πχ . η , για δεκαδικα)


//η slice αν δεν βαλουμε ορισμα, δημιουργει ενα shallow copy 
// και κανουμε sort αυτο
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, "en"))  // Shallow copy

// Copy deep copy
//η JSON.stringify μετατρεπει ενα Javascript object σε String.
//η parse μετατρεπει ξανα το string se object. (deep copy)
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

//πιο ασφαλης τροπος να κανουμε deep copy ειναι αυτος.
const cities2 = structuredClone(cities)

// Shallow copies -- Spread operator
const cities3 = [...cities]

const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)


