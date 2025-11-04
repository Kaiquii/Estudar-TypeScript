// string
// number
// boolean

// undefined // É quando não é definido pelo sistema
// null // é definido pelo programador

// any

// const name: string | number = "joao" // O valor que inicia é o que finaliza
// let age: number = 27 // variável de escopo
// var man: boolean = false // variável global

// Operadores
// + - / *
// != Diferente
// !=== Estritramente diferente
// == Igual
/// === Estritamente igual

// if (import.meta.main) {
//   const number5: number = 5
//   const string5: string = "5"

//   if(number5 === string5) {
//     console.log("são iguais")
//   } else {
//     console.log("Não são iguais")
//   }
// }
//                       0         1        2            3
const list: string[] = ["João", "Kaiqui", "Marcola", "Andromeda"];
const numbersList: number[] = [1, 7, 3, 8, 10];

// length - cumprimento de uma lista

function main() {
  // console.log(list.length) // 4
  // console.log(list[list.length - 1]) // eu quero acessar o index 3 ( último valor )

  // list.splice(0, 2) // remove um valor de uma lista
  // console.log(list)

  const tamanho_lista: number = list.length;

  // Inicialização  || Condição ||      Faça
  for (let index = 0; index < tamanho_lista; index++) {
    console.log(index);
    console.log(list[index]);

    // index = index + 1
  }
}

main();
