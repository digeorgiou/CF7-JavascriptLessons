const calc = {
    add: function(a, b){
        return a + b
    },
    

    //μπορουμε και με αυτον τον τροπο να ορισουμε κατευθειαν το ονομα και το 
    //σωμα της συναρτησης
    sub(a, b){
        return a - b
    }
}

console.log(calc.add) //δινει function:add
console.log(calc.add(1,7))
console.log(calc.sub(10,4))

