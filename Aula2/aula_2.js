var person = {
    firstName: "James",
    LastName: "Bond",
    age:15,
    getFullName: function(){
        return this.firstName + ' ' + this.LastName
    }
};
console.log(person.firstName)