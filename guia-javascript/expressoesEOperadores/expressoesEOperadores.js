// // Expressões e Operadores

// // - Expressions
// // - Operators
// //     Binary dois valoes (number + number)
// //     Unary um valor (++number)
// //     Ternary Mais valores (false ? 'alo' : 'nada')


// let number = 1;

// (function() {
//     console.log('alo')
// })()


// // New

// // * Left-hand-side expression
// // * criar um novo Objeto

// let name = new String('Diogo')
// let age = new Number(19)
// console.log(name, age)


// // Operadores unários
// //     typeof
// //     delete

// const person = {
//     name: "damiao",
//     age: 19
// }
// delete person.age
// console.log(typeof person.name)



// // Operadores Aritiméticos

// // Multiplicação
// console.log(3 * 2)
// // divisão
// console.log(3 / 1)
// // soma
// console.log(4 + 34)
// // subtração
// console.log(4 - 2)

// // Resto da divisão
// let remainder
// remainder = 11 % 3
// console.log(remainder)
// // incremento
// let increment = 0
// increment++
// increment++
// console.log(increment)
// // decremento
// let decrement = 5
// --decrement
// --decrement
// console.log(decrement)
// // exponencial
// console.log(3 ** 2)


// Operadores de comparação

// Irá comparar valores e retorna um Boolean como resposta á comparação 

// let one = 1
// let two = 2

// // == igual
// console.log(one == 2)
// // != diferente
// console.log(two != 1)
// // === estritamente igual
// console.log( one === "1")
// // !== estritamente diferente
// console.log(two !== "2")
// // > maior
// console.log(two > one)
// // >= maior igual
// console.log(two >= 2)
// // < menor
// console.log(one < 1)
// // <= menor igual
// console.log(one < 1)

// Operadores de atribuição (Assignment)

// let x

// console.log(x)

// Assignemt
// x = 1

// addition assignement
// x += 1

// subtration assignement
// x -= 1

// multiplication assignement
// x *= 1

// division assignement
// x /= 1

// remainder, exponetiation
// x %= 2
// x **= 2

// Operadores lógicos (logical operators)

// - 2 valores booleans, quando verificados,
// resultará em verdadeiro ou falso

// let pao = true
// let queijo = true

// // AND &&
// console.log(pao && queijo)
// // OR ||
// console.log(queijo || false)
// // NOT !
// console.log(!pao)

// Operador condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manha top
let pao = true
let queijo = false 
const niceBreakfas = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfas)
// Maior de 18
let age = 17
const canDrive = age >= 18 ? 'Can Drive' : "Can't drive"
console.log(canDrive)

// Operador de String (String operator)

// comparison (comparação)

// concatention (concatenação)
// Retorna a união de duas String

console.log("damiao" + "felix")