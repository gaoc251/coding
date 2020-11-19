function Person (firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}
const merber = new Person('Laaaa', 'Hggggg');
Person.getFullName = () => {this.firstname + this.lastname}
console.log("merber",merber, merber.getFullName)
console.log(merber.getFullName)

// undefined


// 如果想让他访问成功，需要将方法添加到原型上