const person = {
    name: 'Bob',
    age: 25
}

const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age) // 26
console.log(person.isAdult) // true 
