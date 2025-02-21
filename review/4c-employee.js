const employee = {
    firstname: "Bob",
    position: "Developer",
    address:{
        street: "Patision 75",
        city: "Athens",
        zipCode: "10434"
    }
}

//προσβαση στα στοιχεια στο nested object εχω με αυτον τον τροπο
console.log(employee.address.street)
console.log(employee.address.city)
console.log(employee.address.zipCode)