const name = 'name1' //const value cannot be changed
let age = 0
let hasHobbies = true

function User(userName, userAge, userHasHobbies){
    return `Name is ${userName} and age is ${userAge} and user has hobbies ${userHasHobbies}`
}
document.write(User(name, age, hasHobbies))

document.write('<hr>')

//arrow function
const User1 = (userName, userAge, userHasHobbies) => {
    return `Name is ${userName} and age is ${userAge} and user has hobbies ${userHasHobbies}`
}
document.write(User1(name, age, hasHobbies))

document.write('<hr>')

const person = {
    name: 'name1',
    age: 0,
    greet() {
        document.write(`hi ${this.name}`)
    }
}

console.log(person)
person.greet()

document.write('<hr>')

const names = ['name1', 'name2', 'name3']
for(let name of names){
    document.write(`for loop name ${name} `)
}
document.write('<br>')
document.write(names.map(name => {
    return `changed name ${name}`
}))

document.write('<br>')

const spreadOperatorArray = [...names]
document.write(`spread name ${spreadOperatorArray}`)

document.write('<br>')

const restOpertorArray = (...args) => {
    //return [arg1, arg2, arg3]
    return args
}
//document.write(restOpertorArray(1,2,3))
document.write(`rest ` + 1,2,3)

document.write('<hr>')

//destructuring
const printName = ({name,age}) => {
    document.write(name + age)
}
printName(person)