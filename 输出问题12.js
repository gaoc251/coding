function Person (firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

const Laaaa = new Person('Laaaa', 'Hggggg');
const sarah = Person("Shhhh", 'Smmm')

console.log("Laaaa", Laaaa)
console.log("sarah", sarah)

// Person { firstname: 'Laaaa', lastname: 'Hggggg' }   undefined
// sarah this指向的是window，undefined