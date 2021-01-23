// // if ...else

// if (true) {
//     // codigo
// } else {
//     // codigo
// }



// let temperature = 36.5

// if (temperature >= 37) {
//     console.log(`Esta com febre`)
// } else {
//     console.log(`Esta normal`)
// }

// // Encadeamento de ifs
// if () {
//     // codigo
// } else if () {
//     // codigo
// } else {
//     // codigo
// }

// <=====================================================================================================>

// SWITCH

// function calcular(operator, number1, number2) {
//     let result;

//     switch (operator) {
//         case "+":
//             result = number1 + number2
//             break;
//         case "-":
//             result = number1 - number2
//             break;
//         case "/":
//             result = number1 / number2
//             break;
//         case "*":
//             result = number1 * number2
//             break;
//         default:
//             console.log(`Não implementado!`)
//             break;
//     }
//     return result
// }

// let result = calcular('/', 6, 2)

// console.log(result)

// throw

function sayMyName(name= ''){
    if(name = ''){
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

// try...catch

try {
    sayMyName()
} catch (error) {
    console.log(error)
}