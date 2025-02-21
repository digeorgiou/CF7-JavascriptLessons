const user = {
    firstname: "George",
    lastname: "Papa",
    getFirstname: function() {
        return this.firstname //χρειαζεται οπωσδηποτε το this εδω
    },

    getFullname() {
        return `${this.firstname}, ${this.lastname}`
        }
}
    console.log(user.getFirstname())

    console.log(user.getFullname())

