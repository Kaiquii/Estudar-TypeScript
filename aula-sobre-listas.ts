// const carros: string[] = ["Toyota", "GM", "Fiat"]
// const motos: string[] = ["CG", "Honda", "QLQ coisa"]
// const veiculos: string[] = []
// // console.log(carros[0])

// veiculos.push(...carros, ...motos)

// console.log(veiculos)

// carros.push("Renault")
// let primeiroCarro = carros[0]

// // console.log(primeiroCarro)

// encontrar minimo e maximo da lista

const numeros: number[] = [-2, 0, 35, 99, 13, 10, -90, -900, 100, 99];

let min: number = 0;
let max: number = 0;

for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] < min) {
    min = numeros[index];
  }

  if (numeros[index] > max) {
    max = numeros[index];
  }
}

console.log(min);
console.log(max);
// media = x1 + x2 ...xn / n
// n = quantidade de valores
const notas: number[] = [5, 9, 6, 7, 10];

let soma: number = 0;

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i];
}

soma / notas.length;

console.log(soma);

// -------------

// N! = N * (N-1) X...X1

let numero: number = 5;
let result: number = 1;

// for (let i = numero; i > 0; i--) { // Fatorial de 5, 4, 3, 2, 1
//   result = result * i
// }

// console.log(result);

for (let i = numero; i < 5; i++) {
  // Fatorial de 1, 2, 3, 4, 5
  result = result * i;
}

console.log(result);
