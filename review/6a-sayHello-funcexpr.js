
//console.log(sayHello())
//εδω δεν δουλευει το hoisting. δινει undefined.


//μπορουμε να καταχωρησουμε το function σε μεταβλητη επειδη ειναι 
// first class object . ονομαζεται function expression
const sayHello = function() {
    console.log("Hello!")
}

console.log(sayHello())