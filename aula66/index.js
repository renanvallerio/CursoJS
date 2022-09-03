// Map -> Sempre retorna um array com a mesma quantidade porém pode ter valores alterados...

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor * 2)
console.log(numerosEmDobro)

//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoasNome = pessoas.map(pessoa => pessoa.nome)
console.log(pessoasNome)

const pessoasRemove = pessoas.map(chave => ({ idade: chave.idade }))
console.log(pessoasRemove)

const pessoasAddId = pessoas.map((valor, indice) => {
  newObj = { ...valor }
  newObj.id = indice
  return newObj
})
console.log(pessoasAddId)

console.log(pessoas)
