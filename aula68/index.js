// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pares = numeros.filter(valor => valor % 2 === 0)
console.log(pares)

const dobro = pares.map(valor => valor * 2)
console.log(dobro)

const soma = dobro.reduce((acumulador, valor) => (acumulador += valor))
console.log(soma)

const somaDobroPar = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => (ac += valor))

console.log(somaDobroPar)
