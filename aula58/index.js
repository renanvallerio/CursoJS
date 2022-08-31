// Função construtora -> objetos
// Função fábrica -> ojetos
// Construtora Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456

  const metodoInterno = function () {}

  // Atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = function () {
    console.log(`Sou um método criado por ${this.nome}`)
  }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')

p1.metodo()
p2.metodo()
