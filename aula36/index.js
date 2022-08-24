// For in ->  lê os indices ou chaves do objeto

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
}

console.log(pessoa.nome)
const chave = 'nome'
console.log(pessoa[chave])

for (key in pessoa) {
  console.log(`${key}: ${pessoa[key]}`)
}

const frutas = ['Melancia', 'Melão', 'Manga']

for (let index in frutas) {
  console.log(frutas[index])
}

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}
