/* 1 - Acceder valores de objeto */

const person = {
    name: 'Andy',
    pet: {
        type: 'cat',
        // name: 'Leyco'
    }
}

console.log(person.pet?.name)

/* 2 - Operador ternario */


let number = 12
let result = (number > 10) ? "Es mayor que 10" : "No es mayor"

console.log(result)

/* 3 - Destructuración */

const people = {
    name: 'Andy',
    lastName: 'Vega',
    age: 27,
    mail: 'andycodev@gmail.com'
}

// let name = people.mail ❌

let {name, lastName, age, mail} = people ✅

console.log(name, lastName, age, mail);

/* 4 - Const en los arreglos */

const todoList = ["Write", "Read", "Eat"]

todoList.push("Sleep")

console.log(todoList);

/* 5 - Uso de template literals*/

let names = 'Andy Giampierre'
let activity = 'playing'
let time = 'today'

/* console.log(names + ' is ' + activity + ' with her cats ' + time ); */ ❌
console.log(`${names} is ${activity} with her cats ${time}`); ✅
