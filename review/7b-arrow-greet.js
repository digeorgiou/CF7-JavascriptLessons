//αν ειναι μια παραμετρος, δεν χρειαζονται οι παρενθεσεις
const greet = username => `Hello, ${username}`

//αν δεν εχω καμια παραμετρο πρεπει να μπουν παρενθεσεις
const sayHello = () => console.log("hello")

const func = console.log("hello")

const add = (a, b) => a + b

console.log(greet('Anna'))