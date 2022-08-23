const verdadeira = true

//Let tem escopo de bloco {...bloco}
//Var só tem escopo de função

/* 
let nome = 'Luiz'; // criando
var nome = 'Luiz'; // criando

if (verdadeira) {
  let nome = 'Otávio'; // criando
  var nome2 = 'Rogério'; // redeclarando

  if (verdadeira) {
    let nome = 'Outra coisa';
    var nome2 = 'Ronaldo'; // redeclarando
  }
}

console.log(nome, nome2);
 */

/* function falaOi() {
  if (verdadeira) {
    let nome = 'Luiz'
    var sobrenome = 'Miranda'
  }

  console.log(sobrenome)
}

falaOi()
 */

console.log(nome)
console.log(sobrenome)

let nome = 'Luiz'
var sobrenome = 'Miranda'

console.log(nome)
console.log(sobrenome)
