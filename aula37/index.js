// For classic - Geralmente com iteráveis (array ou string)
// For in - Retorna o índice ou chave (string, array ou object)
// For of Retorna o Valor em si (iteráveis: arrays ou strings)

//              1       2         3
const nomes = ['Luiz', 'Otávio', 'Henrique']

console.log('=-----= classic =-----=')
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}

console.log('=-----= in =-----=')
for (let i in nomes) {
  console.log(nomes[i])
}

console.log('=-----= of =-----=')
for (let valor of nomes) {
  console.log(valor)
}

console.log('=-----= forEach =-----=')
nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array)
})

const pessoa = {
  name: 'Lux',
  surname: 'Dark',
  age: 22
}

for (let key in pessoa) {
  console.log(`${key}: ${pessoa[key]}`)
}
