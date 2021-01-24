// Estruturas de repetição


// <= ======================FOR=======================>
// for (let i = 0; i < 4; i++) {
//     const element = i;
//     console.log(element)
// }

// <= ======================While=======================>
// let op = Math.floor(Math.random() * 10)
// console.log(op)
// while (op > 5) {
//     console.log(op)
//     op = Math.floor(Math.random() * 10)
// }

// <= ======================FOR of=======================>
let alunos = ["Damiao", "Lucas", "Maria", "João"]
// retorna o valor dos alunos ou seja o valor do elemnto
// for (const aluno of alunos) {
//     console.log(aluno)
// }

// <= ======================FOR in=======================>
// retorna o index dos alunos ou seja a posição
for (const index in alunos) {
    console.log(`Aluno: ${alunos[index]} index: ${index}`)
}
