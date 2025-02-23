function generateRandomNumbers(count, min, max) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

const arr = generateRandomNumbers(50, 1, 1000)

console.log(arr)

/*
1. Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη
συνάρτηση map για να δημιουργήσετε έναν νέο πίνακα
όπου κάθε αριθμός διπλασιάζεται
*/
const arrDouble = arr.map(val => val*2)
// console.log(arrDouble)

/*
2. Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη
συνάρτηση filter για να δημιουργήσετε έναν νέο πίνακα
που περιλαμβάνει μόνο τους ζυγούς αριθμούς
*/

const arrFiltered = arr.filter(val => val % 2 === 0)
console.log(arrFiltered)
/*
3. Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη
συνάρτηση some για να ελέγξετε εάν τουλάχιστον ένας
αριθμός είναι θετικός
*/

console.log(arr.some(val => val > 0))


/*
4. Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη
συνάρτηση every για να ελέγξετε εάν όλοι οι αριθμοί
είναι θετικοί
*/

console.log(arr.every(val => val > 0))

const people = [{name:'Alice', age:30},{name:'Bob', age:25}, {name:'Charlie', age: 35}]

/*
5. Δεδομένου ενός πίνακα αντικειμένων,
χρησιμοποιήστε τη συνάρτηση filter για να
δημιουργήσετε έναν νέο πίνακα που περιλαμβάνει
μόνο χρήστες κάτω των 30 ετών
*/

console.log(people.filter(person => person.age < 30))

/*
2. Στη συνέχεια χρησιμοποιήστε τη συνάρτηση map για
να δημιουργήσετε έναν νέο πίνακα που περιέχει μόνο
τα ονόματα.
*/

console.log(people.map(person => person.name))