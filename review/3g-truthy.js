let temp = 40
const s = "Hello"

//εδω το temp μπαινει σε boolean context η μεταβλητη μας.
//οταν γινεται αυτο, η γλωσσα προσπαθει να το μετατρεψει σε boolean
//οταν ενα String ειναι null η "" μετατρεπεται σε false (falsy value), 
// αλλιως σε true.
//σε numbers , το 0 ειναι falsy value ενω οποιοσδηποτε αλλος αριθμος 
// ειναι  truthy

if(temp) {
    console.log("Non-Zero")
} else {
    console.log("Temp is Zero")
}

let str = (s) ? "Str is non-empty" : "Str is empty"
console.log(str)