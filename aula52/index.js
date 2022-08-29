const nome = 'Luiz'

function falaNome() {
  console.log(nome)
}

function usaFalaNome(params) {
  // const nome = 'Otávio' não é utilizado
  falaNome()
}
usaFalaNome()
