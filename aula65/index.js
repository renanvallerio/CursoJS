// Fillter -> Sempre retorna um array com a mesma quantidade de elementos ou menos...

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10)
// console.log(numerosFiltrados)

/* let maior10 = []
for (valor of numeros) if (valor > 10) maior10.push(valor)
console.log(maior10)
 */

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const nome5mais = pessoas.filter(valor => valor.nome.length >= 5)
console.log(nome5mais)

const anos50mais = pessoas.filter(valor => valor.idade > 50)
console.log(anos50mais)

const LetraFinalA = pessoas.filter(valor => valor.nome.endsWith('a'))
// pessoas.filter(valor => valor.nome.toLocaleLowerCase.endsWith('a'))
console.log(LetraFinalA)
