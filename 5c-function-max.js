
console.log(max(12,6)) //δουλευει κι ας γραφτει πριν τον ορισμο του function. γινεται hoisting


//οι συναρτησεις μπορουν να οριζονται ανεξαρτητα, στο global space.
//οι συναρτησεις(functions) ειναι first class objects. (δηλαδη μπορουν να 
//βρισκονται οπουδηποτε θα μπορουσε να ηταν μια μεταβλητη) - μπορουν 
//να μπουν ως παραμετροι σε μια συναρτηση - callbacks
function max(a,b){
    return a > b ? a : b
}

console.log(max(10,5))