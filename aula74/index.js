// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}!`

// instância
const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.') // <- Pessoa = Função construtora
const data = new Date() // <-- Date = função construtora

console.log(pessoa1)
console.log(pessoa2)
