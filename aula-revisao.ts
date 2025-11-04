// string
// number
// boolean

// undefined
// null

// const value: number = 10
// console.log(value)

// var global: boolean = true
// let execute: boolean = true

// if(execute) { // Início do escopo
//   let name: string = "name"
//   console.log(name)
// } // Final do escopo

// let haveClass: boolean = true
// let allStudentsPresents: boolean = false

// if (haveClass) {
//   console.log("hoje tem aula")
// } else {
//   console.log("hoje não tem aula")
// }

// if (condição) {}

// if (haveClass === true && allStudentsPresents === true) {
//   console.log("tem aula, e todos os alunos estão presentes")

// } else if(haveClass === true && allStudentsPresents === false) {
//   console.log("Tem aula, mas nem todos os estudantes estão presentes")

// } else {
//   console.log("hoje não tem aula")
// }

// Operadores
// +, -, /, *
// &&, ==, ===,
// != Diferente "visualmente"
// !== estritamente diferente

// == "Visualmente" igual
// === estritamente igual, ou seja = "visualmente" e de tipo.

// const numberInString: string = "10"
// const numberInNumber: number = 10

// if (numberInString === numberInNumber) {
//   console.log("são iguais estritamente iguais")
// } else {
//   console.log("não são estritamente iguais")
// }

// const firstNumber: number = 12
// const secondNumber: number = 13

// const otherNumber: number = 1

// a primeira condição foi validade, e a segunda também, corresponde a condição
// if (firstNumber !== secondNumber && firstNumber !== otherNumber) {
//   console.log("São estritamente diferentes")
// } else {
//   console.log("são estritamente iguais")
// }

// || - Ou
// if (firstNumber !== secondNumber || 1 !== otherNumber) {
//   console.log("uma das condições foi atendida")
// } else {
//   console.log("nenhuma condição foi atendida")
// }

//                                  0         1       2
const listOfStudents: string[] = ["Rebeca", "Léo", "Kaiqui"];

//                               0   1   2  3  4
const listOfNumbers: number[] = [2, 10, 11, 8, 9];

console.log(listOfNumbers[2]);
